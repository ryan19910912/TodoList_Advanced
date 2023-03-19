
import { BiSearchAlt2 } from 'react-icons/bi';
import TodoList from './SearchList';
import { createApi } from "unsplash-js";

//從APP.jsx收到的參數及值
const Form = ({ setInputText, inputText, photos, setPhotos, tab, setTab}) => {

  //建立unsplash search
  const unsplash = createApi({
    accessKey: "13jnDjh1M6KKoLabHVRVuolonFSnirPHOif97eaY_eY"
  });

  //當inputText異動時，則觸發此function
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  }

  //當點擊送出時，觸發此function
  const submitTodo = () => {

    //如果button的type=button，因為它會變成純按鈕，則不需要添加event.preventDefault()
    // event.preventDefault();
    // setInputText('');
    setPhotos([])
    //取得隨機圖片
    unsplash.photos
      .getRandom({
        count: 9,    //回傳的照片數量，預設 1 ，最高 30
        query: inputText,  //搜尋字串，用空白隔開
        orientation: tab,  //目標照片方向，可用值: landscape (橫向), portrait (縱向), squarish (方形)
      })
      .then(unsplash.toJson)
      .then((json) => {
        console.log(json.response);
        json.response.map(element => {
          let photoUrl = element.urls.small;
          setPhotos(
            photos =>
            [
            ...photos,
            {
              photoUrl: photoUrl,
              id: Math.random() * 999
            }
          ])
        })
      })
  }

  //假如tab異動，則觸發此function
  const handlerSelect = (event) => {
    console.log("event = "+event.target.value)
    setTab(event.target.value);
  }

  return (
    <form>
      <input type="text" className="todo-input" placeholder="請輸入關鍵字搜尋" value={inputText} onChange={inputTextHandler} />
      <button type="button" className="todo-button" onClick={submitTodo}>
        <BiSearchAlt2 />
      </button>
      <div className="select">
        <select name="tab" onChange={handlerSelect}>
          <option value="squarish">方形</option>
          <option value="portrait">縱向</option>
          <option value="landscape">橫向</option>
        </select>
      </div>
    </form>
  )
}

//輸出給別人使用
export default Form