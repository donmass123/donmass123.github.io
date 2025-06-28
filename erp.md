<?xml version="1.0" encoding="UTF-8"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
	<key for="node" id="nodegraph" yfiles.type="nodegraphics"/>
	<key for="edge" id="edgegraph" yfiles.type="edgegraphics"/>
	<graph edgedefault="directed" id="G">
		<node id="entity0">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="334" width="203.12" x="302" y="9442"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="166" x="0" y="4">account_transactions</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="284" width="166" x="2" y="31.66796875">id
account_id
type
sub_type
amount
reff_no
operation_date
created_by
transaction_id
transaction_payment_id
transfer_transaction_id
note
deleted_at
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity1">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="154" width="200.68" x="2866" y="8402"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="165" x="0" y="4">account_types</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="104" width="165" x="2" y="31.66796875">id
name
parent_account_type_id
business_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity2">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="214" width="239.76" x="2132" y="8620"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="194" x="0" y="4">accounting_acc_trans_mappings</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="164" width="194" x="2" y="31.66796875">id
business_id
ref_no
type
created_by
operation_date
note
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity3">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="254" width="201.56" x="789" y="9038"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="163" x="0" y="4">accounting_account_types</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="204" width="163" x="2" y="31.66796875">id
name
business_id
created_by
account_primary_type
account_type
parent_id
description
show_balance
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity4">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="294" width="188.8" x="2132" y="8983"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="156" x="0" y="4">accounting_accounts</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="244" width="156" x="2" y="31.66796875">id
name
gl_code
business_id
account_primary_type
account_sub_type_id
detail_type_id
parent_account_id
description
status
created_by
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity5">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="314" width="253.07999999999998" x="2866" y="8973"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="203" x="0" y="4">accounting_accounts_transactions</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="264" width="203" x="2" y="31.66796875">id
accounting_account_id
acc_trans_mapping_id
transaction_id
transaction_payment_id
amount
type
sub_type
map_type
created_by
operation_date
note
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity6">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="474" width="195.24" x="789" y="9372"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="161" x="0" y="4">accounting_budgets</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="424" width="161" x="2" y="31.66796875">id
accounting_account_id
financial_year
jan
feb
mar
apr
may
jun
jul
aug
sep
oct
nov
dec
quarter_1
quarter_2
quarter_3
quarter_4
yearly
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity7">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="274" width="132.0" x="1329" y="9008"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="128" x="0" y="4">accounts</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="224" width="128" x="2" y="31.66796875">id
business_id
name
account_number
account_details
account_type_id
note
created_by
is_closed
deleted_at
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity8">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="294" width="111.0" x="2400" y="8983"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="107" x="0" y="4">activity_log</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="244" width="107" x="2" y="31.66796875">id
log_name
description
subject_id
subject_type
event
business_id
causer_id
causer_type
properties
batch_uuid
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity9">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="274" width="167.92" x="1591" y="8993"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="138" x="0" y="4">asset_maintenances</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="224" width="138" x="2" y="31.66796875">id
business_id
asset_id
maitenance_id
status
priority
created_by
assigned_to
details
maintenance_note
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity10">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="314" width="184.8" x="542" y="3382"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="152" x="0" y="4">asset_transactions</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="264" width="152" x="2" y="31.66796875">id
business_id
asset_id
transaction_type
ref_no
receiver
quantity
transaction_datetime
allocated_upto
reason
parent_id
created_by
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity11">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="194" width="128.0" x="789" y="8630"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="124" x="0" y="4">asset_warranties</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="144" width="124" x="2" y="31.66796875">id
asset_id
start_date
end_date
additional_cost
additional_note
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity12">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="394" width="121.0" x="789" y="3105"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="117" x="0" y="4">assets</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="344" width="117" x="2" y="31.66796875">id
business_id
asset_code
name
quantity
model
serial_no
category_id
location_id
purchase_date
purchase_type
unit_price
depreciation
is_allocatable
description
created_by
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity13">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="394" width="185.24" x="1329" y="40"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="151" x="0" y="4">barcodes</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="344" width="151" x="2" y="31.66796875">id
name
description
width
height
paper_width
paper_height
top_margin
left_margin
row_distance
col_distance
stickers_in_one_row
is_default
is_continuous
stickers_in_one_sheet
business_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity14">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="314" width="137.0" x="789" y="5775"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="133" x="0" y="4">bookings</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="264" width="133" x="2" y="31.66796875">id
contact_id
waiter_id
table_id
correspondent_id
business_id
location_id
booking_start
booking_end
created_by
booking_status
booking_note
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity15">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="194" width="105.0" x="1056" y="5762"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="101" x="0" y="4">brands</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="144" width="101" x="2" y="31.66796875">id
business_id
name
description
created_by
deleted_at
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity16">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="1674" width="303.84" x="1591" y="4034"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="248" x="0" y="4">business</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="1624" width="248" x="2" y="31.66796875">id
name
currency_id
start_date
tax_number_1
tax_label_1
tax_number_2
tax_label_2
code_label_1
code_1
code_label_2
code_2
default_sales_tax
default_profit_percent
owner_id
time_zone
fy_start_month
accounting_method
default_sales_discount
sell_price_tax
logo
sku_prefix
enable_product_expiry
expiry_type
on_product_expiry
stop_selling_before
enable_tooltip
purchase_in_diff_currency
purchase_currency_id
p_exchange_rate
transaction_edit_days
stock_expiry_alert_days
keyboard_shortcuts
pos_settings
weighing_scale_setting
enable_brand
enable_category
enable_sub_category
enable_price_tax
enable_purchase_status
enable_lot_number
default_unit
enable_sub_units
enable_racks
enable_row
enable_position
enable_editing_product_from_purchase
sales_cmsn_agnt
item_addition_method
enable_inline_tax
currency_symbol_placement
enabled_modules
date_format
time_format
currency_precision
quantity_precision
ref_no_prefixes
theme_color
created_by
productcatalogue_settings
accounting_settings
asset_settings
enable_rp
rp_name
amount_for_unit_rp
min_order_total_for_rp
max_rp_per_order
redeem_amount_per_unit_rp
min_order_total_for_redeem
min_redeem_point
max_redeem_point
rp_expiry_period
rp_expiry_type
email_settings
sms_settings
custom_labels
common_settings
is_active
created_at
updated_at
sharenumber
capital						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity17">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="674" width="219.56" x="1056" y="2569"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="181" x="0" y="4">business_locations</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="624" width="181" x="2" y="31.66796875">id
business_id
location_id
name
landmark
country
state
city
zip_code
invoice_scheme_id
sale_invoice_scheme_id
invoice_layout_id
sale_invoice_layout_id
selling_price_group_id
print_receipt_on_invoice
receipt_printer_type
printer_id
mobile
alternate_number
email
website
featured_products
is_active
default_payment_accounts
custom_field1
custom_field2
custom_field3
custom_field4
accounting_default_map
deleted_at
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity18">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="194" width="161.92" x="1056" y="8630"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="132" x="0" y="4">cash_denominations</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="144" width="132" x="2" y="31.66796875">id
business_id
amount
total_count
model_type
model_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity19">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="214" width="202.44" x="789" y="7243"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="161" x="0" y="4">cash_register_transactions</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="164" width="161" x="2" y="31.66796875">id
cash_register_id
amount
pay_method
type
transaction_type
transaction_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity20">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="294" width="128.0" x="1056" y="6350"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="124" x="0" y="4">cash_registers</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="244" width="124" x="2" y="31.66796875">id
business_id
location_id
user_id
status
closed_at
closing_amount
total_card_slips
total_cheques
denominations
closing_note
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity21">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="274" width="119.0" x="1056" y="5418"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="115" x="0" y="4">categories</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="224" width="115" x="2" y="31.66796875">id
name
business_id
short_code
parent_id
created_by
category_type
description
slug
deleted_at
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity22">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="94" width="171.92" x="1056" y="8466"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="142" x="0" y="4">categorizables</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="64" width="142" x="2" y="31.66796875">category_id
categorizable_type
categorizable_id						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity23">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="1254" width="244.76" x="1056" y="4031"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="199" x="0" y="4">contacts</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="1204" width="199" x="2" y="31.66796875">id
business_id
type
contact_type
land_mark
street_name
building_number
additional_number
supplier_business_name
name
prefix
first_name
middle_name
last_name
email
contact_id
contact_status
tax_number
city
state
country
address_line_1
address_line_2
zip_code
dob
mobile
landline
alternate_number
pay_term_number
pay_term_type
credit_limit
created_by
balance
total_rp
total_rp_used
total_rp_expired
is_default
shipping_address
shipping_custom_field_details
is_export
export_custom_field_1
export_custom_field_2
export_custom_field_3
export_custom_field_4
export_custom_field_5
export_custom_field_6
position
customer_group_id
custom_field1
custom_field2
custom_field3
custom_field4
custom_field5
custom_field6
custom_field7
custom_field8
custom_field9
custom_field10
deleted_at
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity24">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="214" width="174.92" x="1913" y="4764"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="145" x="0" y="4">currencies</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="164" width="145" x="2" y="31.66796875">id
country
currency
code
symbol
thousand_separator
decimal_separator
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity25">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="214" width="194.68" x="1329" y="504"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="159" x="0" y="4">customer_groups</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="164" width="159" x="2" y="31.66796875">id
business_id
name
amount
price_calculation_type
selling_price_group_id
created_by
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity26">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="194" width="201.56" x="1329" y="2957"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="163" x="0" y="4">dashboard_configurations</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="144" width="163" x="2" y="31.66796875">id
business_id
created_by
name
color
configuration
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity27">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="74" width="157.36" x="302" y="8476"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="126" x="0" y="4">discount_variations</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="44" width="126" x="2" y="31.66796875">discount_id
variation_id						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity28">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="494" width="144.0" x="1056" y="9362"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="140" x="0" y="4">discounts</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="444" width="140" x="2" y="31.66796875">id
name
business_id
brand_id
category_id
location_id
priority
discount_type
rule_type
min_order_amount
buy_quantity
get_quantity
get_product_id
fixed_price
is_stackable
discount_amount
starts_at
ends_at
is_active
spg
applicable_in_cg
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity29">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="234" width="166.92" x="40" y="9048"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="137" x="0" y="4">document_and_notes</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="184" width="137" x="2" y="31.66796875">id
business_id
notable_id
notable_type
heading
description
is_private
created_by
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity30">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="194" width="157.92" x="1056" y="3662"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="128" x="0" y="4">expense_categories</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="144" width="128" x="2" y="31.66796875">id
name
business_id
code
parent_id
deleted_at
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity31">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="574" width="232.44" x="1591" y="9337"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="191" x="0" y="4">field_forces</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="524" width="191" x="2" y="31.66796875">id
visit_id
business_id
contact_id
visit_to
visit_address
assigned_to
visited_address
visited_address_longitude
visited_address_latitude
status
visit_on
visited_on
meet_with_mobileno
meet_with_mobileno2
meet_with_mobileno3
meet_with
meet_with2
meet_with3
meet_with_designation
meet_with_designation2
meet_with_designation3
visit_for
comments
reason_to_not_meet_contact
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity32">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="74" width="116.0" x="789" y="7569"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="112" x="0" y="4">group_sub_taxes</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="44" width="112" x="2" y="31.66796875">group_tax_id
tax_id						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity33">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="454" width="136.0" x="542" y="9382"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="132" x="0" y="4">installment_db</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="404" width="132" x="2" y="31.66796875">id
business_id
contact_id
transaction_id
system_id
installment_value
total
number
paidnumber
period
type
benefit
benefit_type
benefit_value
latfines
latfinestype
installmentdate
notes
user_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity34">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="294" width="160.36" x="2657" y="8983"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="129" x="0" y="4">installment_systems</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="244" width="129" x="2" y="31.66796875">id
business_id
name
number
period
type
benefit
benefit_type
latfines
latfinestype
description
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity35">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="514" width="174.92" x="1329" y="9352"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="145" x="0" y="4">installments</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="464" width="145" x="2" y="31.66796875">id
installment_id
business_id
contact_id
transaction_id
payment_id
system_id
installment_number
installment_value
number
period
type
benefit
benefit_type
benefit_value
latfines
latfinestype
latfines_value
paid_value
paid_date
installmentdate
notes
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity36">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="174" width="105.0" x="302" y="2819"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="101" x="0" y="4">inventory</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="124" width="101" x="2" y="31.66796875">id
branch_id
name
end_date
status
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity37">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="254" width="200.68" x="40" y="4531"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="165" x="0" y="4">inventory_products</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="204" width="165" x="2" y="31.66796875">id
inventory_id
product_id
amount_after_inventory
Amount_difference
inventory_type
qty_before
transaction_id
variation_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity38">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="1734" width="216.56" x="1329" y="788"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="178" x="0" y="4">invoice_layouts</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="1684" width="178" x="2" y="31.66796875">id
name
header_text
invoice_no_prefix
quotation_no_prefix
invoice_heading
sub_heading_line1
sub_heading_line2
sub_heading_line3
sub_heading_line4
sub_heading_line5
invoice_heading_not_paid
invoice_heading_paid
quotation_heading
sub_total_label
discount_label
tax_label
total_label
round_off_label
total_due_label
paid_label
show_client_id
client_id_label
client_tax_label
date_label
date_time_format
show_time
show_brand
show_sku
show_cat_code
show_expiry
show_lot
show_image
show_sale_description
sales_person_label
show_sales_person
table_product_label
table_qty_label
table_unit_price_label
table_subtotal_label
cat_code_label
logo
show_logo
show_business_name
show_location_name
show_landmark
show_city
show_state
show_zip_code
show_country
show_mobile_number
show_alternate_number
show_email
show_tax_1
show_tax_2
show_barcode
show_payments
show_customer
customer_label
commission_agent_label
show_commission_agent
show_reward_point
highlight_color
footer_text
module_info
common_settings
is_default
business_id
show_letter_head
letter_head
show_qr_code
qr_code_fields
design
cn_heading
cn_no_label
cn_amount_label
table_tax_headings
show_previous_bal
prev_bal_label
change_return_label
product_custom_fields
contact_custom_fields
location_custom_fields
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity39">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="274" width="117.0" x="1329" y="2592"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="113" x="0" y="4">invoice_schemes</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="224" width="113" x="2" y="31.66796875">id
business_id
name
scheme_type
number_type
prefix
start_number
invoice_count
total_digits
is_default
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity40">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="234" width="146.0" x="302" y="9048"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="142" x="0" y="4">media</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="184" width="142" x="2" y="31.66796875">id
business_id
file_name
description
uploaded_by
model_type
model_media_type
model_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity41">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="94" width="97.0" x="1329" y="8466"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="93" x="0" y="4">migrations</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="44" width="93" x="2" y="31.66796875">id
migration
batch						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity42">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="94" width="183.24" x="1056" y="9956"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="149" x="0" y="4">model_has_permissions</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="4" width="149" x="2" y="31.66796875">permission_id
model_type
model_id						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity43">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="94" width="116.0" x="1056" y="8252"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="112" x="0" y="4">model_has_roles</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="4" width="112" x="2" y="31.66796875">role_id
model_type
model_id						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity44">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="314" width="179.68" x="40" y="9452"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="144" x="0" y="4">notification_templates</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="264" width="144" x="2" y="31.66796875">id
business_id
template_for
email_body
sms_body
whatsapp_text
subject
cc
bcc
auto_send
auto_send_sms
auto_send_wa_notif
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity45">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="194" width="124.0" x="1329" y="8630"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="120" x="0" y="4">notifications</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="144" width="120" x="2" y="31.66796875">id
type
notifiable_type
notifiable_id
data
read_at
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity46">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="214" width="164.36" x="2400" y="8621"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="133" x="0" y="4">oauth_access_tokens</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="164" width="133" x="2" y="31.66796875">id
user_id
client_id
name
scopes
revoked
created_at
updated_at
expires_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity47">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="154" width="123.0" x="40" y="8650"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="119" x="0" y="4">oauth_auth_codes</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="104" width="119" x="2" y="31.66796875">id
user_id
client_id
scopes
revoked
expires_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity48">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="254" width="194.68" x="1056" y="9038"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="159" x="0" y="4">oauth_clients</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="204" width="159" x="2" y="31.66796875">id
user_id
name
secret
provider
redirect
personal_access_client
password_client
revoked
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity49">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="114" width="228.76" x="2400" y="8430"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="183" x="0" y="4">oauth_personal_access_clients</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="64" width="183" x="2" y="31.66796875">id
client_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity50">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="114" width="167.8" x="2657" y="8426"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="135" x="0" y="4">oauth_refresh_tokens</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="64" width="135" x="2" y="31.66796875">id
access_token_id
revoked
expires_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity51">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="274" width="116.0" x="1913" y="8993"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="112" x="0" y="4">partners_assets</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="224" width="112" x="2" y="31.66796875">id
business_id
assetcode
description
quantity
price
curentprice
purchasedate
changedate
status
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity52">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="94" width="115.0" x="1591" y="8458"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="111" x="0" y="4">password_resets</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="64" width="111" x="2" y="31.66796875">email
token
created_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity53">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="134" width="111.0" x="1329" y="9936"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="107" x="0" y="4">permissions</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="84" width="107" x="2" y="31.66796875">id
name
guard_name
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity54">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="274" width="162.92" x="1329" y="3221"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="133" x="0" y="4">printers</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="224" width="133" x="2" y="31.66796875">id
business_id
name
connection_type
capability_profile
char_per_line
ip_address
port
path
created_by
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity55">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="74" width="123.0" x="542" y="8476"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="119" x="0" y="4">product_locations</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="44" width="119" x="2" y="31.66796875">product_id
location_id						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity56">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="214" width="105.0" x="2657" y="8623"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="101" x="0" y="4">product_racks</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="164" width="101" x="2" y="31.66796875">id
business_id
location_id
product_id
rack
row
position
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity57">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="174" width="189.24" x="542" y="6452"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="155" x="0" y="4">product_variations</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="124" width="155" x="2" y="31.66796875">id
variation_template_id
name
product_id
is_dummy
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity58">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="1014" width="235.88" x="789" y="6159"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="193" x="0" y="4">products</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="964" width="193" x="2" y="31.66796875">id
name
business_id
type
unit_id
secondary_unit_id
sub_unit_ids
brand_id
category_id
sub_category_id
tax
tax_type
enable_stock
alert_quantity
sku
barcode_type
expiry_period
expiry_period_type
enable_sr_no
weight
product_custom_field1
product_custom_field2
product_custom_field3
product_custom_field4
product_custom_field5
product_custom_field6
product_custom_field7
product_custom_field8
product_custom_field9
product_custom_field10
product_custom_field11
product_custom_field12
product_custom_field13
product_custom_field14
product_custom_field15
product_custom_field16
product_custom_field17
product_custom_field18
product_custom_field19
product_custom_field20
image
product_description
created_by
preparation_time_in_minutes
warranty_id
is_inactive
not_for_selling
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity59">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="534" width="232.32" x="40" y="6036"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="188" x="0" y="4">purchase_lines</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="484" width="188" x="2" y="31.66796875">id
transaction_id
product_id
variation_id
quantity
secondary_unit_quantity
pp_without_discount
discount_percent
purchase_price
purchase_price_inc_tax
item_tax
tax_id
purchase_requisition_line_id
purchase_order_line_id
quantity_sold
quantity_adjusted
quantity_returned
po_quantity_purchased
mfg_quantity_used
mfg_date
exp_date
lot_number
sub_unit_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity60">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="154" width="118.0" x="302" y="8650"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="114" x="0" y="4">reference_counts</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="104" width="114" x="2" y="31.66796875">id
ref_type
ref_count
business_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity61">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="74" width="202.0" x="542" y="7383"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="162" x="0" y="4">res_product_modifier_sets</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="44" width="162" x="2" y="31.66796875">modifier_set_id
product_id						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity62">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="214" width="105.0" x="1329" y="3565"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="101" x="0" y="4">res_tables</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="164" width="101" x="2" y="31.66796875">id
business_id
location_id
name
description
created_by
deleted_at
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity63">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="74" width="167.8" x="1056" y="8894"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="135" x="0" y="4">role_has_permissions</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="4" width="135" x="2" y="31.66796875">permission_id
role_id						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity64">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="194" width="122.0" x="1329" y="8202"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="118" x="0" y="4">roles</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="144" width="118" x="2" y="31.66796875">id
name
guard_name
business_id
is_default
is_service_staff
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity65">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="74" width="158.8" x="789" y="8476"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="126" x="0" y="4">sell_line_warranties</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="44" width="126" x="2" y="31.66796875">sell_line_id
warranty_id						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity66">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="194" width="164.8" x="302" y="7586"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="132" x="0" y="4">selling_price_groups</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="144" width="132" x="2" y="31.66796875">id
name
description
business_id
is_active
deleted_at
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity67">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="154" width="106.0" x="542" y="8650"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="102" x="0" y="4">sessions</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="104" width="102" x="2" y="31.66796875">id
user_id
ip_address
user_agent
payload
last_activity						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity68">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="154" width="197.56" x="1056" y="7754"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="159" x="0" y="4">sheet_spreadsheet_shares</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="104" width="159" x="2" y="31.66796875">id
sheet_spreadsheet_id
shared_with
shared_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity69">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="194" width="156.92" x="1329" y="7734"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="127" x="0" y="4">sheet_spreadsheets</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="144" width="127" x="2" y="31.66796875">id
business_id
name
sheet_data
created_by
folder_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity70">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="254" width="204.12" x="40" y="6640"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="167" x="0" y="4">stock_adjustment_lines</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="204" width="167" x="2" y="31.66796875">id
transaction_id
product_id
variation_id
quantity
secondary_unit_quantity
unit_price
removed_purchase_line
lot_no_line_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity71">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="54" width="189.68" x="40" y="8486"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="154" x="0" y="4">stock_adjustments_temp</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="24" width="154" x="2" y="31.66796875">id						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity72">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="94" width="73.0" x="1913" y="8451"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="69" x="0" y="4">system</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="44" width="69" x="2" y="31.66796875">id
key
value						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity73">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="234" width="118.0" x="1056" y="6735"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="114" x="0" y="4">tax_rates</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="184" width="114" x="2" y="31.66796875">id
business_id
name
amount
is_tax_group
for_tax_group
created_by
deleted_at
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity74">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="634" width="210.12" x="542" y="4772"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="173" x="0" y="4">transaction_payments</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="584" width="173" x="2" y="31.66796875">id
transaction_id
business_id
is_return
amount
method
payment_type
transaction_no
card_transaction_number
card_number
card_type
card_holder_name
card_month
card_year
card_security
cheque_number
bank_account_number
paid_on
created_by
paid_through_link
gateway
is_advance
payment_for
parent_id
note
document
payment_ref_no
account_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity75">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="554" width="223.44" x="40" y="6972"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="182" x="0" y="4">transaction_sell_lines</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="504" width="182" x="2" y="31.66796875">id
transaction_id
product_id
variation_id
quantity
secondary_unit_quantity
quantity_returned
unit_price_before_discount
unit_price
line_discount_type
line_discount_amount
unit_price_inc_tax
item_tax
tax_id
discount_id
lot_no_line_id
sell_line_note
so_line_id
so_quantity_invoiced
res_service_staff_id
res_line_order_status
parent_sell_line_id
children_type
sub_unit_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity76">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="194" width="272.28" x="1591" y="8630"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="215" x="0" y="4">transaction_sell_lines_purchase_lines</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="144" width="215" x="2" y="31.66796875">id
sell_line_id
stock_adjustment_line_id
purchase_line_id
quantity
qty_returned
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity77">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="2094" width="228.44" x="789" y="3611"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="187" x="0" y="4">transactions</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="2044" width="187" x="2" y="31.66796875">id
business_id
location_id
is_kitchen_order
res_table_id
res_waiter_id
res_order_status
type
sub_type
status
sub_status
is_quotation
payment_status
adjustment_type
contact_id
customer_group_id
invoice_no
ref_no
source
subscription_no
subscription_repeat_on
transaction_date
total_before_tax
tax_id
tax_amount
discount_type
discount_amount
rp_redeemed
rp_redeemed_amount
shipping_details
shipping_address
delivery_date
shipping_status
delivered_to
delivery_person
shipping_charges
shipping_custom_field_1
shipping_custom_field_2
shipping_custom_field_3
shipping_custom_field_4
shipping_custom_field_5
additional_notes
staff_note
is_export
export_custom_fields_info
round_off_amount
additional_expense_key_1
additional_expense_value_1
additional_expense_key_2
additional_expense_value_2
additional_expense_key_3
additional_expense_value_3
additional_expense_key_4
additional_expense_value_4
final_total
expense_category_id
expense_sub_category_id
expense_for
commission_agent
document
is_direct_sale
is_suspend
exchange_rate
total_amount_recovered
transfer_parent_id
return_parent_id
opening_stock_product_id
created_by
purchase_requisition_ids
prefer_payment_method
prefer_payment_account
sales_order_ids
purchase_order_ids
custom_field_1
custom_field_2
custom_field_3
custom_field_4
import_batch
import_time
types_of_service_id
packing_charge
packing_charge_type
service_custom_field_1
service_custom_field_2
service_custom_field_3
service_custom_field_4
service_custom_field_5
service_custom_field_6
is_created_from_api
rp_earned
order_addresses
is_recurring
recur_interval
recur_interval_type
recur_repetitions
recur_stopped_on
recur_parent_id
invoice_token
pay_term_number
pay_term_type
selling_price_group_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity78">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="234" width="186.8" x="542" y="9048"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="154" x="0" y="4">types_of_services</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="184" width="154" x="2" y="31.66796875">id
name
description
business_id
location_price_group
packing_charge
packing_charge_type
enable_custom_fields
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity79">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="254" width="179.8" x="1056" y="6026"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="147" x="0" y="4">units</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="204" width="147" x="2" y="31.66796875">id
business_id
actual_name
short_name
allow_decimal
base_unit_id
base_unit_multiplier
created_by
deleted_at
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity80">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="94" width="160.36" x="2132" y="8445"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="129" x="0" y="4">user_contact_access</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="44" width="129" x="2" y="31.66796875">id
user_id
contact_id						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity81">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="994" width="230.88" x="1329" y="4312"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="188" x="0" y="4">users</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="944" width="188" x="2" y="31.66796875">id
user_type
surname
first_name
last_name
username
email
password
language
contact_no
address
remember_token
business_id
available_at
paused_at
max_sales_discount_percent
allow_login
status
is_enable_service_staff_pin
service_staff_pin
crm_contact_id
is_cmmsn_agnt
cmmsn_percent
selected_contacts
dob
gender
marital_status
blood_group
contact_number
alt_number
family_number
fb_link
twitter_link
social_media_1
social_media_2
permanent_address
current_address
guardian_name
custom_field_1
custom_field_2
custom_field_3
custom_field_4
bank_details
id_proof_name
id_proof_number
deleted_at
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity82">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="174" width="179.68" x="40" y="7596"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="144" x="0" y="4">variation_group_prices</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="124" width="144" x="2" y="31.66796875">id
variation_id
price_group_id
price_inc_tax
price_type
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity83">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="194" width="200.44" x="40" y="4855"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="159" x="0" y="4">variation_location_details</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="144" width="159" x="2" y="31.66796875">id
product_id
product_variation_id
variation_id
location_id
qty_available
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity84">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="134" width="160.36" x="1329" y="7998"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="129" x="0" y="4">variation_templates</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="84" width="129" x="2" y="31.66796875">id
name
business_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity85">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="134" width="202.0" x="1056" y="7998"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="162" x="0" y="4">variation_value_templates</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="84" width="162" x="2" y="31.66796875">id
name
variation_template_id
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity86">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="334" width="197.68" x="302" y="6372"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="162" x="0" y="4">variations</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="284" width="162" x="2" y="31.66796875">id
name
product_id
sub_sku
product_variation_id
variation_value_id
default_purchase_price
dpp_inc_tax
profit_percent
default_sell_price
sell_price_inc_tax
created_at
updated_at
deleted_at
combo_variations						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity87">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="194" width="118.0" x="1913" y="8630"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="114" x="0" y="4">warranties</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="144" width="114" x="2" y="31.66796875">id
name
business_id
description
duration
duration_type
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<node id="entity88">
			<data key="nodegraph">
				<y:GenericNode configuration="com.yworks.entityRelationship.big_entity">
					<y:Geometry height="214" width="130.0" x="2866" y="8626"/>
					<y:Fill color="#FFFFE1" transparent="false"/>
					<y:BorderStyle color="#000000" type="line" width="1.0"/>
					<y:NodeLabel alignment="center" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.name" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="internal" modelPosition="t" backgroundColor="#FFFFE1" textColor="#FFFFFF" visible="true" horizontalTextPosition="center" iconTextGap="4" height="22" width="126" x="0" y="4">whatsapp_gateway</y:NodeLabel>
					<y:NodeLabel alignment="left" autoSizePolicy="content" configuration="com.yworks.entityRelationship.label.attributes" fontFamily="Courier" fontSize="12" fontStyle="plain" hasLineColor="false" modelName="custom" modelPosition="t" backgroundColor="#FFFFFF" textColor="#000000" visible="true" horizontalTextPosition="center" iconTextGap="4" height="164" width="126" x="2" y="31.66796875">id
sources
is_default
wa_server
sender
app_key
auth_key
created_at
updated_at						<y:LabelModel>
							<y:ErdAttributesNodeLabelModel/>
						</y:LabelModel>
						<y:ModelParameter>
							<y:ErdAttributesNodeLabelModelParameter/>
						</y:ModelParameter>
					</y:NodeLabel>
				</y:GenericNode>
			</data>
		</node>
		<edge id="edge10-0" source="entity10" target="entity10">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="737" y="3575"/>
						<y:Point x="776" y="3556"/>
						<y:Point x="776" y="3517"/>
						<y:Point x="737" y="3497"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge10-1" source="entity10" target="entity12">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge10-2" source="entity10" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="789" y="3054"/>
						<y:Point x="1056" y="3436"/>
						<y:Point x="1329" y="3819"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge10-3" source="entity10" target="entity81">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="789" y="3539"/>
						<y:Point x="1056" y="3896"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge10-4" source="entity10" target="entity81">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="789" y="3560"/>
						<y:Point x="1056" y="3938"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge12-0" source="entity12" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="1056" y="3590"/>
						<y:Point x="1329" y="3840"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge12-1" source="entity12" target="entity21">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge12-2" source="entity12" target="entity81">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge13-0" source="entity13" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge14-0" source="entity14" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="1056" y="5346"/>
						<y:Point x="1329" y="5346"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge14-1" source="entity14" target="entity23">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge14-2" source="entity14" target="entity81">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge15-0" source="entity15" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge15-1" source="entity15" target="entity81">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge16-0" source="entity16" target="entity24">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge16-1" source="entity16" target="entity73">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge16-2" source="entity16" target="entity81">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge17-0" source="entity17" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge17-1" source="entity17" target="entity38">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge17-2" source="entity17" target="entity39">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge19-0" source="entity19" target="entity20">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge20-0" source="entity20" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge20-1" source="entity20" target="entity81">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge21-0" source="entity21" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge21-1" source="entity21" target="entity81">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge23-0" source="entity23" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge23-1" source="entity23" target="entity81">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge25-0" source="entity25" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge26-0" source="entity26" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge30-0" source="entity30" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge32-0" source="entity32" target="entity73">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge32-1" source="entity32" target="entity73">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge36-0" source="entity36" target="entity17">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="542" y="2906"/>
						<y:Point x="789" y="2906"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge37-0" source="entity37" target="entity36">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge37-1" source="entity37" target="entity58">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="302" y="4679"/>
						<y:Point x="542" y="5446"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge37-2" source="entity37" target="entity77">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="302" y="4658"/>
						<y:Point x="542" y="4658"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge37-3" source="entity37" target="entity86">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge38-0" source="entity38" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge39-0" source="entity39" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge42-0" source="entity42" target="entity53">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="line" width="1.0"/>
					<y:Arrows source="none" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge43-0" source="entity43" target="entity64">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="line" width="1.0"/>
					<y:Arrows source="none" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge54-0" source="entity54" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge57-0" source="entity57" target="entity58">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge58-0" source="entity58" target="entity15">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge58-1" source="entity58" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="1056" y="6684"/>
						<y:Point x="1329" y="6684"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge58-2" source="entity58" target="entity21">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge58-3" source="entity58" target="entity21">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge58-4" source="entity58" target="entity73">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge58-5" source="entity58" target="entity79">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge58-6" source="entity58" target="entity81">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge59-0" source="entity59" target="entity58">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="302" y="6321"/>
						<y:Point x="542" y="6369"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge59-1" source="entity59" target="entity73">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="302" y="7311"/>
						<y:Point x="542" y="7497"/>
						<y:Point x="789" y="7497"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge59-2" source="entity59" target="entity77">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="302" y="4700"/>
						<y:Point x="542" y="4700"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge59-3" source="entity59" target="entity86">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge61-0" source="entity61" target="entity58">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge62-0" source="entity62" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge63-0" source="entity63" target="entity53">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="line" width="1.0"/>
					<y:Arrows source="none" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge63-1" source="entity63" target="entity64">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="line" width="1.0"/>
					<y:Arrows source="none" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge64-0" source="entity64" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge66-0" source="entity66" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="542" y="7683"/>
						<y:Point x="789" y="7683"/>
						<y:Point x="1056" y="7683"/>
						<y:Point x="1329" y="7683"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge68-0" source="entity68" target="entity69">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge69-0" source="entity69" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge70-0" source="entity70" target="entity58">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="302" y="6767"/>
						<y:Point x="542" y="6767"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge70-1" source="entity70" target="entity77">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="302" y="4721"/>
						<y:Point x="542" y="4721"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge70-2" source="entity70" target="entity86">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge73-0" source="entity73" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge73-1" source="entity73" target="entity81">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge74-0" source="entity74" target="entity77">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge75-0" source="entity75" target="entity58">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="302" y="7332"/>
						<y:Point x="542" y="7332"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge75-1" source="entity75" target="entity73">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="302" y="7518"/>
						<y:Point x="542" y="7518"/>
						<y:Point x="789" y="7518"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge75-2" source="entity75" target="entity77">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="302" y="6746"/>
						<y:Point x="542" y="6348"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge75-3" source="entity75" target="entity86">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge77-0" source="entity77" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="1056" y="3917"/>
						<y:Point x="1329" y="3917"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge77-1" source="entity77" target="entity17">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge77-2" source="entity77" target="entity23">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge77-3" source="entity77" target="entity30">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge77-4" source="entity77" target="entity73">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge77-5" source="entity77" target="entity81">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge77-6" source="entity77" target="entity81">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge79-0" source="entity79" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge79-1" source="entity79" target="entity81">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge81-0" source="entity81" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge81-1" source="entity81" target="entity23">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge82-0" source="entity82" target="entity66">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge82-1" source="entity82" target="entity86">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge83-0" source="entity83" target="entity17">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0">
						<y:Point x="302" y="3033"/>
						<y:Point x="542" y="3033"/>
						<y:Point x="789" y="3033"/>
					</y:Path>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge83-1" source="entity83" target="entity86">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge84-0" source="entity84" target="entity16">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge85-0" source="entity85" target="entity84">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge86-0" source="entity86" target="entity57">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
		<edge id="edge86-1" source="entity86" target="entity58">
			<data key="edgegraph">
				<y:PolyLineEdge>
					<y:Path sx="0.0" sy="0.0" tx="0.0" ty="0.0"/>
					<y:LineStyle color="#000000" type="dashed" width="1.0"/>
					<y:Arrows source="white_diamond" target="circle"/>
					<y:BendStyle smoothed="false"/>
				</y:PolyLineEdge>
			</data>
		</edge>
	</graph>
</graphml>
