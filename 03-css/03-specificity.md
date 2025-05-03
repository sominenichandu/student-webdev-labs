Below is the specificity of each CSS rule:

1. `nav .list-item > a`  
   **Specificity:** (0, 0, 1, 2)

2. `#main::first-letter`  
   **Specificity:** (0, 1, 0, 1)

3. `input[type]`  
   **Specificity:** (0, 0, 1, 1)

4. `section .main::first-line`  
   **Specificity:** (0, 0, 1, 2)

5. `nav ul.menu li#first a:not([class='visited'])`  
   **Specificity:** (0, 1, 2, 4)

6. `div ol li ul li ol li ul li a`  
   **Specificity:** (0, 0, 0, 10)
