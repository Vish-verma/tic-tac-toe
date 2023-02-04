import Sqaure from "./square";
import BoardWrapper from "./styles/board.style";

interface BoardProps {
  squares: Array<string>;
  onClick: (index :number) => any;
}

export default function Board(props: BoardProps) {
  const { squares, onClick } = props;
  return <BoardWrapper >
        <div className="grid items-center justify-center grid-cols-3 w-fit">
            {squares.map((sqr, index)=>{
                return <Sqaure key={index} value={sqr} onClick={()=> onClick(index)}/>
            })}
        </div>
    </BoardWrapper>;
}
