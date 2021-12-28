<!-- changed from html to php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CALCULATOR</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="container" id="main-container">
        <div class="calculator">
            <h1 id="display"></h1>
            <button class="btn" type="button" id=clear>Clear</button>
            <div class="number123">
                <button class="btn" type="button">1</button>
                <button class="btn" type="button">2</button>
                <button class="btn" type="button">3</button>
                <button class="btn" type="button" id="plus">+</button>
                
                
            </div>

            <div class="number456">
                <button class="btn" type="button">4</button>
                <button class="btn" type="button">5</button>
                <button class="btn" type="button">6</button>
                <button class="btn" type="button" id="minus">-</button>
            </div>
            <div class="number789">
                <button class="btn" type="button">7</button>
                <button class="btn" type="button">8</button>
                <button class="btn" type="button">9</button>
                <button class="btn" type="button"id="divide">÷</button>
            </div>
            <div class="oandclear">
                <button class="btn" type="button">0</button>
                <button class="btn" type="button">.</button>
                <button class="btn" type="button">=</button>
                <button class="btn" type="button" id="multiply">×</button>
            </div>

        </div>
    
    </div>
    <script src="index.js"></script>
</body>
</html>
