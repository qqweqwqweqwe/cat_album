const API_ENDPOINT='https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/'


async function api(nodeid){
  try{
    const response=await fetch(`${API_ENDPOINT}/${nodeid ? nodeid : ''}`)
    if(response.ok){
      return await response.json()
    }
    else{
      throw new Error('서버의 상태가 이상합니다')
    }
  }
  catch(e){
    console.error(`무언가 잘못되었습니다 ${e.message}`)
  }
}