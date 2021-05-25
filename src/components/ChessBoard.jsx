import React from 'react'
import Chessboard from "chessboardjsx";

const ChessBoard = (props) => {
    console.log(props)
    return (
        <>
            <Chessboard width="250" position="2R5/4bppk/1p1p3Q/5R1P/4P3/5P2/r4q1P/7K b - - 6 50"/>
        </>
    )
}
export default ChessBoard