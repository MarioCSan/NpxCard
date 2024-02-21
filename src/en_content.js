import boxen from 'boxen'
import chalk from 'chalk'
import open from 'open'
import { data } from './data.js'

export const questions = [
  {
    type: 'list',
    name: 'action',
    message: "What do you want to do?",
    choices: [
      {
        name: 'Send me an email',
        value: () => {
          open('mailto:mario.canales.dev@outlook.es')
          console.log('\nLet\'s connect and explore the realm of technological possibilities!.\n')
        }
      },
      {
        name: 'Know more about my projects',
        value: ()=> {
            open('https://github.com/mariocsan')
            console.log('\nKeep up with my projects.\n')
        }
      },
      {
        name: 'Exit',
        value: () => console.log('Enjoy your day.\n')
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
    `${data.labelDev} ${data.dev}`,
    '',
    `${chalk.bold('.NET Developer with experience turning ideas into exceptional experiences.')}`,
    `${chalk.bold('My focus revolves around technical excellence and creativity to deliver products that not only meet needs but also inspire.')}`,
    '',
    `${chalk.bold('Passionate about crafting innovative solutions that blend technology and user experience.')}`,
    `${chalk.bold('As Elon Musk says, When something is important enough, you do it even if the odds are not in your favor.')}`
  ].join('\n'),
  {
    margin: 1,
    float: 'left',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'white'
  }
)