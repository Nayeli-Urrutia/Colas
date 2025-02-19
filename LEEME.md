# 🎮🐍 Análisis del Juego Snake con Cola

El juego de la serpiente utiliza una estructura de datos de **Cola (Queue)** para representar y mover la serpiente en el tablero. A continuación, se presenta un resumen del funcionamiento del juego.

## 🟢 Representación de la Serpiente

- La serpiente se modela como una **cola de coordenadas (x, y)** en un arreglo.
- La cola sigue la lógica **FIFO (First In, First Out)**, donde el primer elemento que entra es el primero que sale.
- La **cabeza de la serpiente** se encuentra al final de la cola, y el cuerpo está formado por todos los elementos de la cola.

## 🔄 Movimiento de la Serpiente

A intervalos regulares, se realizan los siguientes pasos:

1. 🗑️ **Eliminar la última parte del cuerpo (dequeue)** para que la serpiente "avance".
2. 📍 **Calcular la nueva posición de la cabeza** según la dirección de movimiento.
3. ➕ **Agregar la nueva cabeza a la cola (enqueue)** en la dirección del movimiento.
4. 🎨 **Dibujar la serpiente** con las nuevas coordenadas.

## 🍎 Comer la Comida y Crecer

- Cuando la **cabeza de la serpiente coincide con la posición de la comida**, la serpiente crece:
  - ➕ **Se agrega una nueva cabeza a la cola** sin eliminar el último segmento, aumentando el tamaño de la serpiente.

## 💥 Colisiones y Fin del Juego

Se comprueban las colisiones, que pueden ocurrir de dos maneras:

- 🚧 La **cabeza choca contra los bordes** del tablero.
- 🔄 La **cabeza choca con su propio cuerpo**.

Para detectar colisiones, se compara la nueva posición de la cabeza con todas las posiciones del cuerpo.

## 🍽️ Generación de la Comida

Cuando la serpiente come, se genera una nueva posición aleatoria para la comida:

1. 🎯 **Se elige una coordenada dentro de los límites del tablero**.
2. 🔍 **Se verifica que la comida no esté dentro del cuerpo** de la serpiente.
3. 🔄 Si la comida generada está dentro de la serpiente, **se vuelve a generar** hasta encontrar una posición válida.

## ✅ Conclusión

- ⚡ **Uso eficiente de la cola**, permitiendo manejar el crecimiento y movimiento de la serpiente de manera eficaz.
- 🏃 **Movimiento fluido**, asegurado mediante la eliminación de la última parte y la adición de una nueva cabeza.
- 🍏 **Lógica clara para comer y crecer**, evitando eliminar la cola cuando la serpiente come.
- 🚫 **Manejo correcto de colisiones**, finalizando el juego si es necesario.

Esta implementación del juego es **eficiente y bien organizada**, facilitando su comprensión y desarrollo. 🚀🐍
