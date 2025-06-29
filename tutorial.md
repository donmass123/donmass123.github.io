<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Point of Sales Tutorial</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f6f9;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
        }
        .section-title {
            text-align: center;
            font-size: 2rem;
            color: #333;
            margin: 40px 0 20px;
        }
        .video-container {
            text-align: center;
            margin-bottom: 20px;
        }
        .video-container video {
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .step {
            font-size: 1.1rem;
            color: #444;
            margin: 15px 0;
        }
        .step-title {
            font-weight: bold;
            color: #0066cc;
        }
        .steps-list {
            list-style-type: none;
            padding: 0;
        }
        .steps-list li {
            background: #fff;
            margin: 10px 0;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
        }
        .steps-list li:before {
            content: '✔';
            font-size: 20px;
            color: #28a745;
            margin-right: 15px;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            font-size: 0.9rem;
            color: #888;
        }
    </style>
</head>
<body>

<div class="container">
    <h2 class="section-title">Tutorial Point of Sales</h2>

    <!-- Login Section -->
    <section>
        <h3 class="section-title">Login</h3>
        <div class="video-container">
            <video width="640" height="360" controls autoplay loop>
                <source src="https://pos.bland.id/uploads/product/video/1.mp4" type="video/mp4">
                Browser Anda tidak mendukung pemutaran video.
            </video>
        </div>
        <p class="step">Ikuti langkah-langkah berikut untuk login:</p>
        <ol class="steps-list">
            <li><span class="step-title">Step 1:</span> Klik Masuk</li>
            <li><span class="step-title">Step 2:</span> Masukan username dan password</li>
            <li><span class="step-title">Step 3:</span> Klik Login</li>
        </ol>
    </section>

    <hr>

    <!-- Forgot Password Section -->
    <section>
        <h3 class="section-title">Lupa Password</h3>
        <div class="video-container">
            <video width="640" height="360" controls autoplay loop>
                <source src="https://pos.bland.id/uploads/product/video/2.mp4" type="video/mp4">
                Browser Anda tidak mendukung pemutaran video.
            </video>
        </div>
        <p class="step">Ikuti langkah-langkah berikut untuk mereset kata sandi:</p>
        <ol class="steps-list">
            <li><span class="step-title">Step 1:</span> Klik "Lupa kata sandi anda?"</li>
            <li><span class="step-title">Step 2:</span> Masukan email yang terdaftar dan kirim tautan</li>
            <li><span class="step-title">Step 3:</span> Cek Email Anda -> Spam</li>
            <li><span class="step-title">Step 4:</span> Klik "Reset Password"</li>
            <li><span class="step-title">Step 5:</span> Masukan password baru dan konfirmasi password</li>
            <li><span class="step-title">Step 6:</span> Kembali ke halaman Login dan masukan username dan password</li>
            <li><span class="step-title">Step 7:</span> Klik Login</li>
        </ol>
    </section>

    <div class="footer">
        <p>&copy; 2025 Point of Sales System. All rights reserved.</p>
    </div>
</div>

</body>
</html>
