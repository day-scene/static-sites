const appUrl = 'myluff.com'

export const app = {
  title: '绿火',
  url: appUrl,
  shortSlogan: '自媒体公司',
  longSlogan: '自媒体公司，舍我其谁',
}

// 企业介绍
export const about = {
  title: '关于我们',
  slug: 'about',
  url: '/about',
  shortIntro: '你最好的 IT 顾问',
  longIntro: '你最好的 IT 顾问, this is why',
  // 特长
  specialties: [
    'why i am best, reason 1',
    'why i am best, reason 2',
    'why i am best, reason 3',
  ],
}

export const service = {
  title: '服务',
  slug: 'services',
  url: '/services',
  desc: '我们提供行业的一整套解决方案',
  items: [
    {
      title: 'service 1',
      desc: 's1 desc',
    },
    {
      title: 'service 1',
      desc: 's1 desc',
    },
    {
      title: 'service 1',
      desc: 's1 desc',
    },
    {
      title: 'service 1',
      desc: 's1 desc',
    },
  ]
}

// 过往客户
export const client = {
  title: '客户',
  slug: 'client',
  url: '/client',
  desc: '我们服务的客户很多',
  items: [
    {
      title: '作品1名称',
    }
  ]
}

// 过往案例、作品、项目
export const portfolio = {
  title: '案例',
  slug: 'portfolio',
  url: '/portfolio',
  desc: '我们过往的作品牛炸天',
  items: [
    {
      title: '作品1名称',
    }
  ]
}

// 过往客户的评价
export const comment = {
  title: '客户评价',
  slug: 'comment',
  url: '/comment',
  desc: '过往的客户给了我们极高的评价',
  items: [
    {
      name: 'jim',
      title: 'CEO',
      content: `
      非常……好，
      我能说些啥。
      `,
    },
    {
      name: 'jim',
      title: 'CEO',
      content: `
      非常……好，
      我能说些啥
      非常……好，
      我能说些啥
      `,
    },
    {
      name: 'jim',
      title: 'CEO',
      content: `
      非常……好，
      我能说些啥
      非常……好，
      我能说些啥
      非常……好，
      我能说些啥
      `,
    },
  ],
}

// call to action
export const cta = {
  title: '立即联系',
  slug: 'call-to-action',
  desc: '心动不如行动，立即联系我们吧',
}

export const team = {
  title: '团队介绍',
  slug: 'team',
  url: '/team',
  desc: '核心成员来自世界五百强',
  items: [
    {
      name: 'jim',
      title: 'CEO',
      content: `
      非常……好，
      我能说些啥。
      `,
    },
    {
      name: 'jim',
      title: 'CEO',
      content: `
      非常……好，
      我能说些啥
      `,
    },
    {
      name: 'jim',
      title: 'CEO',
      content: `
      非常……好，
      我能说些啥
      `,
    },
  ],
}

export const blog = {
  title: '公司新闻',
  slug: 'news',
  url: '/news',
}

export const contact = {
  title: '联系我们',
  slug: 'contact',
  url: '/contact',
  desc: '现在联系我们，我们会尽快回复',
  // email: `contact@${appUrl}`,
  email: { title: '邮箱', value: `contact@${appUrl}` },
  // phone: '15918888888',
  phone: { title: '电话', value: '15918888888' },
  // address: '广州市天河路104号'
  address: { title: '地址', value: '广州市天河路104号' }
}

export const menu = {
  index: {
    title: '首页',
    slug: 'index',
    url: '/',
  },
  about,
  service,
  portfolio,
  // team,
  blog,
  contact,
}

export default {
  app,
  menu,
  contact,
  about,
  service,
  client,
  portfolio,
  cta,
}
