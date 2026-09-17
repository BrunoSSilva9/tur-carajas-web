export interface Parada {
  id: string
  nome: string
  categoria: string
  categoriaCor: string
  horarioInicio: string
  horarioFim: string
  duracao: string
  imagem: string
  infoExtra: string
  deslocamentoProximo?: string
}

export const paradasIniciais: Parada[] = [
  {
    id: 'parada-1',
    nome: 'Cachoeira do Goiano & Banho Natural',
    categoria: 'Natureza',
    categoriaCor: 'bg-primary-fixed text-on-primary-fixed',
    horarioInicio: '09:00',
    horarioFim: '11:30',
    duracao: '2h30',
    imagem:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBinGoNr82S8fCkQCh57Y1lm4kV80tEE-WwDvEQdgsY3NBMu9tMApC-pl0L8c4yMWfKCsERtlznK4sv0ONijX5iEbevGbd4tQbnvX3MN9aH_Sru3UCYnaHmAUCXAwoXfwqi6iODC48czDc2oNms-ymbHxmR1SIC5eM1W0Klyr_NyHA4euCmGmvqgZ9eTUt5RucfA_X59UqFvlW0cXDdF3bnJvq4gHbojrUmTiDM4KQwWuAXXqC6M5PD',
    infoExtra: 'Entrada: R$ 15',
    deslocamentoProximo: '15 min de carro (7.2 km) via PA-160',
  },
  {
    id: 'parada-2',
    nome: 'Feira do Produtor Clarindo Moraes da Silva',
    categoria: 'Gastronomia',
    categoriaCor: 'bg-secondary-fixed text-on-secondary-fixed',
    horarioInicio: '12:00',
    horarioFim: '13:45',
    duracao: '1h45',
    imagem:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7xHaiU1D8hVFR4bn5CroLfjo0Ztdo0SafYn72zyuOtLOCpJSZdpMW92gfXXxaCqjvx30oitSMqKYkisAJ4vFvOEG7mWkl-yMgFBEsb0Cxp5MaiMjVBK9Ack4Sicda9bFPVtKWSYaHtiUK1RnSkV-SBCiyl-Y-Dg-nnKmNVVbhFUqI_2kPw8u6K3FOif4HiCo5MEOq9godkdWtitG1HnhgFevRHAHjldeTRW8TabF_aDn4r5qxKjPs',
    infoExtra: 'Gasto médio: ~R$ 50/pessoa',
    deslocamentoProximo: '8 min de carro (3.5 km)',
  },
  {
    id: 'parada-3',
    nome: 'Morro das Antenas & Trilha Suave',
    categoria: 'Aventura Leve',
    categoriaCor: 'bg-surface-variant text-on-surface-variant',
    horarioInicio: '14:30',
    horarioFim: '16:30',
    duracao: '2h00',
    imagem:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzh3GWTl75ee61pNKOa-CImFDGY_smHbs1m-Zm8b5FWsH-WXH77H99L8naoz8WZ9FcjK7cDJTw28XArdfi7xYiun-30yMIxTSOHtYVHa69UUI92bW2GbhiVjDjG3rWyYPM8Qwdk0TTfeVprHDQsML8n23vrAUuTKewK7bfdGyq9nUs2aAirSg-hmTWks3Ay-39uSsZdA8b49djUyXWwtLBfeUSz7jvrMoJafeiEduOj8KrCP8izlUJ',
    infoExtra: 'Entrada Gratuita',
  },
]
