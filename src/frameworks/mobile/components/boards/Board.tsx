import React, { useEffect, useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { IBoardStateGroup } from '@frameworks/web/redux/interfaces/iBoard'
import { IBoardEntity } from '@domains/aggregates/interfaces/iBoard'
import BoardVM from '@frameworks/web/vm/Board'

import di from '@di'

const Board: React.FC = () => {
  const dispatch = useDispatch()

  const [author, onChangeAuthor] = useState('')
  const [content, onChangeContent] = useState('')

  const list: Array<IBoardEntity> = useSelector((state: IBoardStateGroup) => state.board.list)
  const boardVMList = list.map(boardEntity => new BoardVM(boardEntity))

  useEffect(() => {
    const asyncFnc = async () => {
      dispatch(await di.board.getBoards())
    }
    asyncFnc()
  }, [])

  const insertFnc = async () => {
    if(author === '' || content === '') return
    const resStatus = await di.board.insertBoard(author, content)
    if (resStatus) {
      onChangeAuthor('')
      onChangeContent('')
      dispatch(await di.board.getBoards())
    }
  }

  return (
    <View style={styles.boardSection}>
      <View>
        <Text style={styles.sectionTitle}>Board</Text>
        <View style={styles.borderListArea}>
          {boardVMList.map(({ id, author, content, createAt, comments }) => {
            const createDate = new Date(createAt)
            return (
              <>
                <View key={`board-${id}`} style={styles.borderList}>
                  <Text style={{...styles.boardItem, width: '10%'}}>{id}</Text>
                  <Text style={styles.boardItem}>{author}</Text>
                  <Text style={styles.boardItem}>{content}</Text>
                  <Text style={styles.boardItem}>{`${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`}</Text>
                </View>
                {comments.map(({ id, author, content, createAt }) => {
                  const createDate = new Date(createAt)
                  return (
                    <View key={`comment-${id}`} style={styles.commentList}>
                      <Text style={{...styles.commentItem, width: '10%'}}>&rsaquo;</Text>
                      <Text style={styles.commentItem}>{author}</Text>
                      <Text style={styles.commentItem}>{content}</Text>
                      <Text style={styles.commentItem}>{`${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`}</Text>
                    </View>
                  )
                })}
              </>
            )
          })}
        </View>
      </View>
      <View style={styles.addPostArea}>
        <Text style={styles.sectionTitle}>Add Post</Text>
        <View>
          <TextInput style={styles.inputView} onChangeText={text => onChangeAuthor(text)} value={author} placeholder={'author'} />
          <TextInput style={styles.inputView} onChangeText={text => onChangeContent(text)} value={content} placeholder={'content'} />
          <Button onPress={insertFnc} title="Add" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boardSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: '200',
    letterSpacing: 1
  },
  borderListArea: {
    borderBottomWidth: 1,
    borderColor: '#dddddd'
  },
  borderList: {
    borderTopWidth: 1,
    borderColor: '#dddddd',
    flex: 1,
    flexDirection: 'row'
  },
  boardItem: {
    width: '30%',
    fontSize: 15,
    lineHeight: 40,
    textAlign: 'center'
  },
  commentList: {
    borderTopWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#f5f5f5',
    flex: 1,
    flexDirection: 'row',
  },
  commentItem: {
    width: '30%',
    fontSize: 15,
    lineHeight: 40,
    textAlign: 'center'
  },
  addPostArea: {
    marginTop: 20
  },
  inputView: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 50, 
    borderColor: '#bbbbbb', 
    borderWidth: 1,
    color: '#000000',
    marginBottom: 10
  }
})


export default Board