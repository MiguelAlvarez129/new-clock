import { setBgColor } from "../reducers/bgReducer";

const  saveBg = store => next => action => {
  const {type,payload} = action;
  const {color} = store.getState().bgColor
  if (type === 'bgColor/switchBgType'){
    if (!payload){
      console.log(false,color)
      const values = getValues(color)

      localStorage.setItem('deg',values[0])
      localStorage.setItem('sliders',JSON.stringify(values.slice(1)))
      store.dispatch(setBgColor(localStorage.getItem('simpleColor')))
    } else {
      if (localStorage.getItem('sliders')){
        const colors = gradientColors(JSON.parse(localStorage.getItem('sliders'))),
          deg = localStorage.getItem('deg'),
          bg = `linear-gradient(${deg}deg ${colors} )`;
        console.log(bg)
        store.dispatch(setBgColor(bg))
      } else {
        const defaultBg = 'linear-gradient(90deg, #FA8072 0% , #1d4f6d 10% )'
        const values = getValues(defaultBg)
        localStorage.setItem('deg',values[0])
        localStorage.setItem('sliders',JSON.stringify(values.slice(1)))
        store.dispatch(setBgColor(defaultBg))
      }
      localStorage.setItem('simpleColor',color)
    }
  }
  return next(action)
}

const getValues = (string) => {
  console.log(string)
  string = string.split(/,|[()%]/g).filter(e => e.trim())
  return string.slice(1).map((e,index)=>{
    if (!index){
      console.log(e)
      return e.split('deg')[0]
    } else {
      const [color,value] = e.trim().split(' ')
      return {color,value,id:--index}
    }
  })
}

const gradientColors = (sliders) => {
  return sliders.map(e => e).sort((a,b)=> a.value - b.value).reduce((acc,{color,value})=> acc.concat(` , ${color + ' ' + value + '%'}`),'')
}


export default saveBg