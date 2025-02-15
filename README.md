# 📌 Análisis de Códigos de Cola

## ⚡ Código 1: Blackbox  
- Se le dio a la IA toda la información y requisitos de una sola vez.  
- La IA generó el código de manera más directa y compacta.  
- Se validaron las reglas en un solo bloque sin desglosarlas paso a paso.  

## ⚡ Código 2: Copilot de GitHub  
- Se le pidió a la IA cada funcionalidad por separado, paso a paso.  
- Esto llevó a que el código fuera más detallado y con mensajes en consola.  
- Se desarrolló con validaciones más explícitas en cada método.  

---

## 🔍 Comparación de Funcionalidades  

### 1️⃣ Restricción de Límite  
- **Código 1:** Usa `isFull()` para verificar si la cola está llena antes de agregar elementos en `enqueue()`.  
- **Código 2:** Usa `colaLlena()` para la misma validación, pero además imprime un mensaje en `console.log()` cuando la cola está llena.  

### 2️⃣ Inserción en una Posición Específica (Solo en Código 2)  
- **Código 1:** No tiene la opción de insertar un elemento en una posición específica.  
- **Código 2:** Agrega el método `insertar(elemento, posicion)`, permitiendo insertar un elemento en cualquier posición válida dentro de la cola.  

### 3️⃣ Diferentes Métodos para Eliminar Elementos  
- **Código 1:** Solo usa `dequeue()`, que elimina y devuelve el primer elemento.  
- **Código 2:** Tiene `dequeue()`, pero además agrega `quitarFrente()`, que hace lo mismo pero imprime un mensaje antes de eliminar el elemento.  

### 4️⃣ Mensajes en Consola (Solo en Código 2)  
- **Código 2:** Imprime mensajes en la consola para todo.  
- **Código 1:** No imprime estos mensajes, solo devuelve valores.  

### 5️⃣ Diferencias en las Pruebas  
- **Código 1:** Prueba solo operaciones básicas: agregar, eliminar y verificar el frente de la cola.  
- **Código 2:** Prueba más operaciones, incluyendo:  
  - Intento de agregar más elementos de los permitidos.  
  - Inserción en una posición específica.  
  - Verificación de si la cola está vacía o llena.  
  - Uso de `quitarFrente()` como alternativa a `dequeue()`.  

---

## 🏆 **Equipo de Trabajo**  
- **Nayeli Melissa Urrutia Orellana**  
- **Manuel Alexander Monzón Palma**  
