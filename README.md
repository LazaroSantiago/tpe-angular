#Informacion Alumno:
Santiago, Abbate Lázaro
40225059
santi.lazaro@gmail.com
Tandil

#Concepto
Soy voluntario en el Banco de Alimentos de Tandil. Por lo general se reciben donaciones de alimentos, y hay que contar los productos que entran, ej: 20 paquetes de harina de maiz de 900 gramos, 150 paquetes de pure de tomate de 360 gramos, etc. Para varios alimentos como el puré de tomate es importante también saber la fecha de vencimiento. Esta acción de contar, por lo general se hace con lapiz y papel, para después digitalizar.
Mi idea para el proyecto fue hacer una simple app para poder contar los productos que entren, que permita exportar un archivo .CSV para facilitar el trabajo administrativo. Se puede crear un alimento y agregar la cantidad que haya. Hay una opción de mostrar por consola un equivalente a .CSV con los datos que haya, aunque me gustaría en algún momento hacer que de verdad se puedan guardar los datos en un archivo y poder enviar eso a un mail, pero obviamente eso queda por fuera del scope del seminario.

#Requisitos Mínimos
>Ruteo: para cumplir con la parte de ruteo, se creó una sección de previsualización de valores, un poco más parecida a un Excel. Es sencillamente una vista distinta de los datos que están en la vista principal. Cambiar de vista no debería generar ningún bug y los valores se mantienen actualizados.

>Componentes: la página principal utiliza cuatro componentes
>>item-list: muestra los items creados y permite cambiarles la cantidad.
>>item-form: es el formulario de creación de items.
>>item-io: es una botonera con un solo botón, para exportar los datos en formato .CSV. Mi idea a futuro es agregar más opciones como importar .CSV o poder exportar y enviar por mail.
>>item-main: es el contenedor de los tres componentes anteriores.

>Interfaces: se utilizan objetos de tipo Item, la interfaz está especificada en el archivo Item.ts en la carpeta item-list.

>Directivas o Control de Flujo: se utiliza @for tanto en list-preview e item-list para generar un listado con todos los items.

>Comunicación entre Componentes: para poder tener acceso a los datos creados se usa el servicio item-service. Este servicio recibe parametros enviados por item-form, crea un objeto con esos datos y lo agrega a una lista. Se utiliza el patrón de diseño Observable para notificar por cambios a los componentes que estén suscriptos al servicio. (de paso, me da un poco de vergüenza no haber sabido que Angular agrega la palabra "Service" por defecto a la clase, que por eso se llama ItemServiceService 😅)

>Servicios: ItemServiceService, descripto en el punto anterior.