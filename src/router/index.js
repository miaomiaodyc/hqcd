import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/shouye'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"shouye",
      component:shouye
    },
    {
      path:"/shouye",
      name:"shouye",
      component:()=>import('@/components/shouye')
    },
    {
      path:"/msg",
      name:"msg",
      component:()=>import('@/components/msg')
    },
    {
      path:"/my",
      name:"my",
      component:()=>import('@/components/my')
    },
    {
      path:"/login",
      name:"login",
      component:()=>import('@/components/login')
    },
    {
      path:"/horlife",
      name:"horlife",
      component:()=>import('@/components/horlife')
    },
    {
      path:"/xgnews",
      name:"xgnews",
      component:()=>import('@/components/xgnews')
    },
    {
      path:"/djyd",
      name:"djyd",
      component:()=>import('@/components/djyd')
    },
    {
      path:"/showsf",
      name:"showsf",
      component:()=>import('@/components/showsf')
    },
    {
      path:"/dstoday",
      name:"dstoday",
      component:()=>import('@/components/dstoday')
    },
    {
      path:"/slearn",
      name:"slearn",
      component:()=>import('@/components/slearn')
    },
    {
      path:"/spai",
      name:"spai",
      component:()=>import('@/components/spai')
    },
    {
      path:"/syscons",
      name:"syscons",
      component:()=>import('@/components/syscons')
    },
    {
      path:"/charaact",
      name:"charaact",
      component:()=>import('@/components/charaact')
    },
    {
      path:"/myalre",
      name:"myalre",
      component:()=>import('@/components/myalre')
    },
    {
      path:"/perinfor",
      name:"perinfor",
      component:()=>import('@/components/perinfor')
    },
    {
      path:"/modiperin",
      name:"modiperin",
      component:()=>import('@/components/modiperin')
    },
    {
      path:"/perscore",
      name:"perscore",
      component:()=>import('@/components/perscore')
    },
    {
      path:"/scoredetails",
      name:"scoredetails",
      component:()=>import('@/components/scoredetails')
    },
    {
      path:"/modifypwd",
      name:"modifypwd",
      component:()=>import('@/components/modifypwd')
    },
    {
      path:"/payfee",
      name:"payfee",
      component:()=>import('@/components/payfee')
    },
    {
      path:"/polstudy",
      name:"polstudy",
      component:()=>import('@/base/polstudy')
    },
    {
      path:"/thoughtrep",
      name:"thoughtrep",
      component:()=>import('@/base/thoughtrep')
    },
    {
      path:"/xindesumm",
      name:"xindesumm",
      component:()=>import('@/base/xindesumm')
    },
    {
      path:"/minzhu",
      name:"minzhu",
      component:()=>import('@/base/minzhu')
    },
    {
      path:"/personalsummary",
      name:"personalsummary",
      component:()=>import('@/base/personalsummary')
    },
    {
      path:"/discuss",
      name:"discuss",
      component:()=>import('@/base/discuss')
    },
    {
      path:"/cppartymem",
      name:"cppartymem",
      component:()=>import('@/base/cppartymem')
    },
    {
      path:"/xindesummover",
      name:"xindesummover",
      component:()=>import('@/base/xindesummover')
    },
    {
      path:"/xindesum1",
      name:"xindesum1",
      component:()=>import('@/base/xindesum1')
    },
    {
      path:"/memberhd",
      name:"memberhd",
      component:()=>import('@/base/memberhd')
    },
    {
      path:"/hfsth",
      name:"hfsth",
      component:()=>import('@/base/hfsth')
    },
    {
      path:"/findognzt",
      name:"findognzt",
      component:()=>import('@/base/findognzt')
    },
    {
      path:"/xgnewItem",
      name:"xgnewItem",
      component:()=>import('@/zujian1/xgnewItem')
    },
    {
      path:"/thoughtrep1",
      name:"thoughtrep1",
      component:()=>import('@/zujian1/thoughtrep1')
    }
  ]
})
