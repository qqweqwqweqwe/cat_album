class App{
  $target
  constructor($target){
    this.$target=$target

    this.breadcrumb=new Breadcrumb({
      $target,
      $initialState:[] // 나중에 바꿔줄거임
    })
    
    this.imageinfo=new Imageinfo({
      $target,
      $initialState : null
    })

    

  }
}