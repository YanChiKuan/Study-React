import { useState } from 'react'
import '../styles/List.scss'
import _ from 'lodash'
import classNames from 'classnames'

const List = () => {
  const data=[
    { id: _.uniqueId(), thummb:100,time:'2025-3-12',comment: 'this is a comment', name: 'zhangsan', age: 18, owner: 'other' },
    { id: _.uniqueId(), thummb:20,time:'2025-3-1',comment: '我的评论', name: 'lisi', age: 20, owner: 'me' },
    { id: _.uniqueId(), thummb:10,time:'2025-3-10',comment: 'this is a comment', name: 'wangwu', age: 22, owner: 'other' },
    { id: _.uniqueId(), thummb:30,time:'2025-3-2',comment: 'this is a comment', name: 'wangwu', age: 22, owner: 'other' },
    { id: _.uniqueId(), thummb:90,time:'2025-3-8',comment: 'this is a comment', name: 'wangwu', age: 22, owner: 'other' },
    { id: _.uniqueId(), thummb:50,time:'2025-3-6',comment: '我的评论', name: 'zhaoliu', age: 24, owner: 'me' },
  ]
  const [list, setList] = useState(data)
  const tabList = [
    { id: 1, name: '最新' },
    { id: 2, name: '最热' },
  ]

  const [activeTab, setActiveTab] = useState(tabList[0].name)
  const [commentValue,setCommentValue]=useState('')

  const handleDelete = (id) => {
    console.log(id)
    setList(list.filter((item) => item.id !== id))
  }

  const toogleTab = (val) => {
    // 设置当前激活tab
    setActiveTab(val)
    // 切换tab根据对应tab进行排序  使用lodash前端库
    if (val === '最新') {
      setList(_.orderBy(data, ['time'], ['desc']))
    }
    if (val === '最热') {
      setList(_.orderBy(data, ['thummb'], ['desc']))
    }
  }

  const handleCommentChange=(val)=>{
    setCommentValue(val)
  }

  const handlePublish = () =>{
    if(commentValue.trim().length===0){
      alert('评论不能为空')
      return
    }
    setList(
      [
        ...list,
        {
          id: _.uniqueId(),
          thummb:0,
          time:'2025-4-1',
          comment: commentValue,
          name: 'elio',
          age: 18,
          owner: 'me'
        }
      ]
    )
    //清空输入框
    setCommentValue('')
  }

  return (
    <>
      <div className="tab">
        {tabList.map((item) => {
          return (
            <h5
              key={item.id}
              onClick={() => toogleTab(item.name)}
              //原生动态控制类名的写法
              // className={`tab-item ${activeTab === item.name && 'active'}`}
              //使用一个常用的类库classNames来实现className的动态控制
              className={classNames('tab-item',{active:activeTab===item.name})}
            >
              {item.name}
            </h5>
          )
        })}
      </div>
      <ul>
        {list.map((item) => (
          <li key={item.id} className="list-item">
            <p>{item.comment}【{item.thummb}❤】{item.time}</p>
            {item.owner === 'me' && (
              <span className="del-btn" onClick={() => handleDelete(item.id)}>
                删除
              </span>
            )}
          </li>
        ))}
      </ul>
      <textarea name="" id="" cols="30" rows="10" value={commentValue} onChange={(e)=>handleCommentChange(e.target.value)}></textarea>
      <button onClick={handlePublish}>点击发表</button>
    </>
  )
}

export default List
