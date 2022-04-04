import * as React from 'react'
import Board from './boards/Board'
import withAuth from "@frameworks/web/hoc/withAuth";

const Index: React.FC = () => {
    return <Board/>
}


export default withAuth(Index)