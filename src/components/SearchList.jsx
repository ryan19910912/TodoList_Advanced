import { MdCheck, MdDeleteOutline } from 'react-icons/md';

//從下方的SearchList Function收到的參數及值
const Photo = ({
  photoUrl
}) => {
  return (
    <a href={photoUrl} target="_blank">
      <img src={photoUrl} className="imgShow"></img>
    </a>
  )
}

//從APP.jsx收到的參數及值
const SearchList = ({ photos }) => {
  return (
    <div className="image-container">
      <div className="todo-list">
        <h2>搜尋結果</h2>
        <div className='searchDiv'>
        {photos?.map(photo => (
          <Photo
            key={photo.id}
            photoUrl={photo.photoUrl}
          />
        ))}
        </div>
      </div>
    </div>
  )
}

//匯出SearchList給別人使用
export default SearchList