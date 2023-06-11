class Breadcrumb{
  $state
  $breadcrumb // 지금까지 이렇게 선언해주는 이유를 몰랐는데 이제 알게되었음
              // 클래스내의 다른 메소드에서 접근할 수 있도록
  constructor({$target, $initialState}){
    this.$breadcrumb=document.createElement("div")
    this.$breadcrumb.className='Breadcrumb'
    $target.appendChild(this.$breadcrumb)

    this.$state=$initialState
    this.render()
  }
  
  setstate($nextstate){
    this.$state=$nextstate
    this.render()
  }

  render(){
    console.log('check')
    this.$breadcrumb.innerHTML=`<div class="nav-item">root</div>${
      this.$state.map(
        (node, index) => `<div class="nav-item" data-index="${index}">${node.name}</div>`).join('')
      }
    `
  }
}
