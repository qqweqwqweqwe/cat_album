const IMAGE_ENDPOINT='https://fe-dev-matching-2021-03-serverlessdeploymentbuck-1ooef0cg8h3vq.s3.ap-northeast-2.amazonaws.com/public/'
// 변수명 다르게 해줘야한다~
// 다른파일에 이미 있어서

/*
async function api(node){
  try{
    const response =await fetch(`${API_ENDPOINT}${node.filePath}`)
    if (response.ok){
      return await response.json()
    }
    else{
      throw new Error('서버의 상태가 이상합니다')
    }
  }
  catch(e){
    console.error(`무엇인가 잘못됐습니다${e}`)
  }
}
*/

class Imageinfo{
  state=null // state는 현재 파일
  $imageinfo=null
  constructor({$target, $initialState}){
    const imageinfo=document.createElement('div')
    imageinfo.className="imageviewer" // 나중에 Modal로 바꿔줄거임
    this.state=$initialState
    this.$imageinfo=imageinfo
    $target.appendChild(this.$imageinfo)
    this.render()
  }

  setstate(nextstate){
    this.state=nextstate
    this.render()
  }

  render(){
    this.$imageinfo.innerHTML = `<div class="content">${this.state ? `<img src="${IMAGE_ENDPOINT}${this.state}">` : ''}</div>`
    this.$imageinfo.style=this.state ? 'block' : 'none'
  }
}