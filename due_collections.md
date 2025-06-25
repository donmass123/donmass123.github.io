# Adding Due Collections to Cash Register

## What You'll Build
By the end of this tutorial, your cash register will display:
- **Collected Today**: All due payments received today (business-wide)
- **Pending Due Today**: Outstanding amounts from today's sales
- **Overdue Amounts**: Previous days' unpaid dues

### Features:
- Business-wide visibility (not just current cashier)
- Real-time data with transaction counts
- Smart conditional display (overdue box only shows when needed)
- Beautiful responsive design with icons
- Print-friendly styling
- Works in both register details and close register modals

---

## Prerequisites
- Laravel-based POS system
- Basic knowledge of PHP and Blade templates
- Access to controller files and views
- Understanding of database relationships

---

## Implementation Steps

### Step 1: Update the `CashRegisterUtil` Class

Add the following method to your `app/Utils/CashRegisterUtil.php`:

```php
public function getTodayDueCollections($user_id, $open_time, $close_time)
{
    $business_id = request()->session()->get('user.business_id');
    // COLLECTED TODAY
    $today_due = DB::table('transaction_payments as tp')
        ->join('transactions as t', 'tp.transaction_id', '=', 't.id')
        ->whereDate('tp.paid_on', now()->toDateString())
        ->where('t.type', 'sell')
        ->where('t.status', 'final')
        ->where('t.business_id', $business_id)
        ->where('t.payment_status', '!=', 'paid')
        ->select(
            DB::raw('SUM(tp.amount) as total_due_collected'),
            DB::raw('COUNT(DISTINCT tp.transaction_id) as total_due_transactions')
        )
        ->first();
    
    // PENDING DUES TODAY
    $pending_dues = DB::table('transactions as t')
        ->leftJoin('transaction_payments as tp', 't.id', '=', 'tp.transaction_id')
        ->whereDate('t.transaction_date', now()->toDateString())
        ->where('t.type', 'sell')
        ->where('t.status', 'final')
        ->where('t.business_id', $business_id)
        ->where('t.payment_status', '!=', 'paid')
        ->select(
            DB::raw('SUM(t.final_total - COALESCE(tp_total.total_paid, 0)) as total_pending_due'),
            DB::raw('COUNT(t.id) as total_pending_transactions')
        )
        ->leftJoin(
            DB::raw('(SELECT transaction_id, SUM(amount) as total_paid FROM transaction_payments GROUP BY transaction_id) as tp_total'),
            't.id', '=', 'tp_total.transaction_id'
        )
        ->first();

    // OVERDUE AMOUNTS
    $overdue_amounts = DB::table('transactions as t')
        ->leftJoin('transaction_payments as tp', 't.id', '=', 'tp.transaction_id')
        ->whereDate('t.transaction_date', '<', now()->toDateString())
        ->where('t.type', 'sell')
        ->where('t.status', 'final')
        ->where('t.business_id', $business_id)
        ->where('t.payment_status', '!=', 'paid')
        ->select(
            DB::raw('SUM(t.final_total - COALESCE(tp_total.total_paid, 0)) as total_overdue'),
            DB::raw('COUNT(t.id) as total_overdue_transactions')
        )
        ->leftJoin(
            DB::raw('(SELECT transaction_id, SUM(amount) as total_paid FROM transaction_payments GROUP BY transaction_id) as tp_total'),
            't.id', '=', 'tp_total.transaction_id'
        )
        ->first();

    return [
        'due_collected_today' => $today_due->total_due_collected ?? 0,
        'due_transactions_count' => $today_due->total_due_transactions ?? 0,
        'pending_due_today' => $pending_dues->total_pending_due ?? 0,
        'pending_transactions_count' => $pending_dues->total_pending_transactions ?? 0,
        'overdue_amount' => $overdue_amounts->total_overdue ?? 0,
        'overdue_transactions_count' => $overdue_amounts->total_overdue_transactions ?? 0,
    ];
}
