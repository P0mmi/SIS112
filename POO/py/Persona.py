class Persona:
    def __init__(self, nombre, edad, carrera):
        self.nombre = nombre
        self.edad = edad
        self.carrera =carrera

    def saludar(self):
        print(f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años.")
        
    def cumpleaños(self):
        self.edad += 1
        print (f"Feliz cumpleaños ferxxo, tengo {self.edad} años.")
        
    def estudiar(self):
        print(f"Estoy estudiando {self.carrera} la mejor carrera.")
    
persona1 = Persona("Juan", 20, "Medicina")

persona1.saludar()
persona1.estudiar()