#  We Will Rock You - JavaScript Function Optimization  

##  About  
This project demonstrates how to **simplify repetitive code using JavaScript functions** by printing the lyrics of *We Will Rock You* by Queen. The code follows best practices, including function reuse and the `return` statement.

---

##  Files  
- **index.html** → The main webpage that loads the JavaScript file.  
- **script.js** → Contains different versions of the song function, showing how to optimize repetitive code.  

---

##  How It Works  
The script follows three steps to optimize the song lyrics:

### 1. **Basic Version (`printedSong()`)**  
- Uses multiple `console.log()` statements to print the full song.  
- This version has **repetitive lines** in the console output.  

### 2. **Optimized Version (`song()`)**  
- Identifies the **repeated refrain** ("We will, we will rock you") and moves it into a **separate function (`refrain()`)**.  
- Calls `refrain()` instead of writing the lines multiple times.  

### 3. **Refactored Version (`refactoredSong()`)**  
- Uses a **`return` statement** in `refactoredRefrain()` instead of directly logging the refrain.  
- The main function `refactoredSong()` calls `refactoredRefrain()` and logs the result.  

---

##  How to Run  
1. Open **index.html** in a web browser.  
2. Press **F12** to open Developer Tools.  
3. Click on the **Console** tab to see the song printed.  

---

##  Example Output in Console  


## 📜 License  
This project is for educational purposes only. *We Will Rock You* is a song by Queen, and all rights to the lyrics belong to them.
