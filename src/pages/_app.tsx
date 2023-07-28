import '../../styles/landingstyles.css'
import {Reem_Kufi} from 'next/font/google'

export const reemKufiRegular = Reem_Kufi({ 
    subsets: ['latin'],
    weight: '400'
})
export const reemKufiMedium = Reem_Kufi({ 
    subsets: ['latin'],
    weight: '500'
})
export const reemKufiSemiBold = Reem_Kufi({ 
    subsets: ['latin'],
    weight: '600'
})
export const reemKufiBold = Reem_Kufi({ 
    subsets: ['latin'],
    weight: '700'
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
