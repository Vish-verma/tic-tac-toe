import { Inter } from '@next/font/google'
import SquareWrapper from './styles/square.style'

const inter = Inter({ subsets: ['latin'] })

interface SqaureProps {
     value: string;
     onClick: () => any;
}

export default function Sqaure( props: SqaureProps ) {
    const {value, onClick} = props;
  return (
    <SquareWrapper>
      <button className='square' onClick={onClick}>{value}</button>
      </SquareWrapper>
  )
}
