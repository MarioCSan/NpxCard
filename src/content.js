import boxen from 'boxen'
import chalk from 'chalk'
import open from 'open'
import { data } from './data.js'

export const questions = [
  {
    type: 'list',
    name: 'action',
    message: "¿Que quieres hacer?",
    choices: [
      {
        name: 'Enviame un email',
        value: () => {
          open('mailto:canalessanchezmario@gmail.com')
          console.log('\n.Conectémonos y exploremos el reino de las posibilidades tecnológicas.\n')
        }
      },
      {
        name: 'Conoce más sobre mis proyectos',
        value: ()=> {
            open('https://github.com/mariocsan')
            console.log('\nEstate al tanto de mis proyectos.\n')
        }
      },
      {
        name: 'Exit',
        value: () => console.log('Ten un buen día.\n')
      }
    ]
  }
]

export const me = boxen(
  [
    `${data.name}`,
    `${data.tagline}`,
    `${data.location}`,
    ``,
    `${data.labelWebsite}  ${data.website}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedin}  ${data.linkedin}`,
    '',
    `${chalk.bold('Desarrollador .NET con experiencia en convertir ideas en experiencias excepcionales.')}`,
    `${chalk.bold('Mi enfoque se centra en la excelencia técnica y la creatividad para ofrecer productos que no solo satisfacen las necesidades, sino que también inspiran.')}`,
    '',
    `${chalk.bold('Apasionado por la creación de soluciones innovadoras que fusionan tecnología y experiencia del usuario.')}`,
    `${chalk.bold('Como dice Elon Musk, "cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades no están a tu favor"')}`
  ].join('\n'),
  {
    margin: 1,
    float: 'left',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'white'
  }
)