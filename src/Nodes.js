class Node{
  $Node
  constructor({$target}){
    this.$Node=document.createElement('div')
    this.$Node.className='Node'

  
  }
}

// node는 이미지 두가지가 있지
// 하나는 디렉토리 하나는 이미지
// 디렉토리 클릭시 디렉토리 내의 디렉토리 밑 이미지들 렌더링
// 파일(이미지) 클릭시 imageview (imageinfo.js) 생성 후 사진 가져오기h