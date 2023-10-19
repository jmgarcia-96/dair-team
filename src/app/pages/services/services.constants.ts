export class ServicesConstants {
  public readonly services: any[] = [
    {
      title: 'Análisis',
      description:
        'Comenzaremos analizando tu situación, para gestionar de la mejor forma la manera de conseguir tus objetivos. Para ello, diseñaremos un plan de alimentación y entrenamiento 100% personalizado para ti, en función de tus gustos, preferencias, horarios, posibilidades, etc. El cuál, iremos modificando y adaptando a medida que vayas progresando y obteniendo resultados.',
      icon: 'pi pi-chart-bar',
      img: 'assets/img/analisis.jpg',
    },
    {
      title: 'Entrenamiento',
      description:
        'Diseñaremos un plan de entrenamiento totalmente adaptado a ti. Tendremos en cuenta el lugar donde entrenes, el tiempo del que dispongas, material... Todo ello para sacar el máximo rendimiento de la forma más eficiente.',
      icon: 'pi pi-heart-fill',
      img: 'assets/img/entrenamiento.jpg',
    },
    {
      title: 'Nutrición',
      description:
        'Planificaremos tu alimentación de forma que sea llevadera a largo plazo, de esta forma crearemos el HÁBITO. Adaptaremos cada comida según tus gustos y preferencias, pero siempre controlando minuciosamente valores y cantidades.',
      icon: 'pi pi-apple',
      img: 'assets/img/nutricion.jpg',
    },
    {
      title: 'Seguimiento',
      description:
        'Realizaremos un seguimiento constante, incluyendo revisiones completas para ir valorando el progreso e ir realizando los ajustes necesarios. Estaremos a tu disposición 24/7, no solo para cualquier duda que te pueda surgir, también para ser tu motivación día a día.',
      icon: 'pi pi-check-circle',
      img: 'assets/img/seguimiento.jpg',
    },
  ];

  public readonly faq: any[] = [
    {
      question: '¿Quién hace las asesorías?',
      answer:
        'Las personas que componen el equipo de IDFIT, tanto Daniel como Irene, los cuales están cualificados para diseñar y supervisar cada plan.',
      isActive: false,
    },
    {
      question: '¿Las asesorías son personalizadas?',
      answer:
        'Las asesorías son 100% personalizadas, ya que según tus preferencias, gustos, objetivos, tiempo y otros muchos factores, se te va a diseñar un plan único adaptado a TÍ exclusivamente.',
      isActive: false,
    },
    {
      question: '¿Por qué debería contratar vuestro plan?',
      answer:
        'Porque no es solo un plan, es una guía que te va a ayudar a crear una serie de hábitos, y por consecuente, un estilo de vida.',
      isActive: false,
    },
    {
      question: '¿Podré obtener los objetivos marcados?',
      answer:
        'Los resultados van a depender en mayor parte de ti, de tu dedicación y esfuerzo. Nosotros te proporcionamos los medios y conocimientos para que te sea más fácil conseguirlo.',
      isActive: false,
    },
    {
      question: '¿Como consulto mis dudas?',
      answer:
        'Podrás contactarnos vía email o whatsapp. Tenemos un email unicamente dedicado a ello (idfit.asesorias@gmail.com) en el cual intentamos ofrecer la mayor rápidez en la respuesta y la facilidad de comunicación en las actualizaciones del seguimiento.',
      isActive: false,
    },
  ];
}
