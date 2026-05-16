export const app = {
  brand: 'InsightAI',
  brandSub: '会议纪要智能分析',
  userName: '林经理',
  userRole: '大客销售部',
  userInitials: '林',
  status: '在线',
}

export const navItems = [
  { to: '/', label: '工作台', icon: 'dashboard' },
  { to: '/insights', label: '客户洞察', icon: 'insights' },
  { to: '/knowledge', label: '知识库', icon: 'menu_book' },
] as const

export const workbenchStats = [
  {
    icon: 'groups',
    value: '128',
    label: '跟进中客户数',
    badge: '+12%',
    iconAccent: 'tertiary' as const,
    action: null,
  },
  {
    icon: 'description',
    value: '342',
    label: '已生成洞察报告',
    badge: '+8%',
    iconAccent: 'primary' as const,
    action: '查看全部',
  },
  {
    icon: 'lightbulb',
    value: '89',
    label: '挖潜需求数',
    badge: '+15%',
    iconAccent: 'insight' as const,
    action: '查看全部',
  },
  {
    icon: 'trending_up',
    value: '24.5%',
    label: '商机转化率',
    badge: '+3.2%',
    iconAccent: 'secondary' as const,
    action: null,
  },
]

export const activeCustomers = [
  { name: '安琪酵母', status: '跟进中', lastContact: '2 小时前' },
  { name: '云图科技', status: '深度沟通', lastContact: '昨天' },
  { name: '星巴克中国', status: '方案评审', lastContact: '3 天前' },
  { name: '大疆创新', status: '初步接触', lastContact: '1 周前' },
]

export const analysisTasks = [
  {
    title: '安琪酵母 Q1 沟通复盘',
    meta: '音频文件 · 进度 45%',
    status: 'progress' as const,
  },
  {
    title: '云图科技 产品需求纪要',
    meta: '飞书纪要 · 10 分钟前完成',
    status: 'done' as const,
  },
  {
    title: '星巴克中国 门店数字化访谈',
    meta: '微信记录 · 排队中',
    status: 'queued' as const,
  },
]

export const potentialDemands = [
  {
    customer: '安琪酵母',
    pain: '需要主数据管理能力，打通多渠道客户视图',
    tag: '高意向',
    tagVariant: 'high' as const,
    solution: '建议构建 MCM 主数据管理系统',
  },
  {
    customer: '云图科技',
    pain: '希望实现全渠道数据融合与实时分析',
    tag: '核心诉求',
    tagVariant: 'core' as const,
    solution: '数据中台 + 实时洞察引擎方案',
  },
  {
    customer: '星巴克中国',
    pain: '门店运营数据孤岛，难以统一决策',
    tag: '挖潜中',
    tagVariant: 'mining' as const,
    solution: '智能报表工坊 · 季度经营复盘',
  },
  {
    customer: '大疆创新',
    pain: '售后服务流程缺乏 AI 辅助质检',
    tag: '新发现',
    tagVariant: 'new' as const,
    solution: '会议纪要 Agent + 质检规则引擎',
  },
]

export const smartReports = [
  {
    icon: 'assessment',
    title: '季度经营复盘',
    description: '一键汇总本季度客户沟通与商机进展',
  },
  {
    icon: 'person_search',
    title: '大客户画像与诉求',
    description: '全周期洞察报告，含雷达图与诉求图谱',
  },
]

export const insightCustomer = {
  name: '安琪酵母',
  title: '安琪酵母 · 客户洞察',
}

export const insightTabs = [
  { id: '360', label: '360° 智能洞察' },
  { id: 'records', label: '沟通与会议记录' },
  { id: 'demands', label: '业务诉求提炼' },
] as const

export const aiJudgment = {
  summary: {
    meetingCount: '12次',
    phase: '方案选型关键期（预计1-2月内决策）',
    painPoint: '「线上线下会员数据」',
  },
  summaryText:
    '根据历次会议及沟通记录分析，客户当前处于方案选型关键期，核心痛点在于现有系统无法支撑庞大的线上线下会员数据实时打通，导致精准营销效率低下。',
  drivers: [
    '竞品架构陈旧，我方微服务架构优势明显。',
    'IT总监张总对我方技术栈非常认可。',
  ],
  risks: [
    '业务部门对新系统学习成本有顾虑。',
    '整体报价超出Q4预算预期（约超出15%）。',
  ],
}

/** 客户画像评估雷达图 — 五维指标（0–100） */
export const personaRadarDimensions = [
  { label: '采购预算', value: 75 },
  { label: '需求紧迫度', value: 90 },
  { label: '决策权', value: 65 },
  { label: '技术匹配度', value: 80 },
  { label: '客情关系', value: 65 },
]

export const coreDemandInsight = {
  icon: 'track_changes',
  iconTone: 'blue' as const,
  title: '业务核心诉求：全渠道数据融合',
  confidence: '98%',
  description:
    '需在毫秒级延迟内，将App点单与门店POS数据整合，用于实时发券推荐。',
}

export const potentialDemandInsight = {
  icon: 'lightbulb',
  iconTone: 'orange' as const,
  title: '潜在诉求：运维成本转嫁',
  confidence: '85%',
  description:
    '客户虽未明说，但多次询问「扩容是否需要专人」，倾向于全托管SaaS模式。',
}

export const communicationRecords = {
  all: [
    { type: '会议纪要', title: 'Q1 战略对齐会', date: '2024-03-15', source: '飞书' },
    { type: '微信记录', title: 'IT 总监需求确认', date: '2024-03-12', source: '企业微信' },
    { type: '会议纪要', title: '产品方案初评', date: '2024-03-08', source: '现场录音' },
  ],
  meetings: [
    { type: '会议纪要', title: 'Q1 战略对齐会', date: '2024-03-15', source: '飞书' },
    { type: '会议纪要', title: '产品方案初评', date: '2024-03-08', source: '现场录音' },
  ],
  wechat: [
    { type: '微信记录', title: 'IT 总监需求确认', date: '2024-03-12', source: '企业微信' },
  ],
}

export const demandGraphNodes = [
  { id: '1', label: '主数据管理', x: 50, y: 20 },
  { id: '2', label: '全渠道融合', x: 20, y: 50 },
  { id: '3', label: '实时看板', x: 80, y: 50 },
  { id: '4', label: '权限管控', x: 35, y: 80 },
  { id: '5', label: '智能质检', x: 65, y: 80 },
]

export const demandGraphEdges = [
  ['1', '2'],
  ['1', '4'],
  ['2', '3'],
  ['3', '5'],
  ['2', '5'],
]

export const knowledgeItems = [
  {
    customer: '安琪酵母',
    title: '主数据管理需求共识纪要',
    keywords: ['MDM', '全渠道', '高意向'],
    updatedAt: '2024-03-15',
    source: '会议纪要沉淀',
  },
  {
    customer: '云图科技',
    title: '数据中台技术选型讨论',
    keywords: ['数据中台', '实时分析'],
    updatedAt: '2024-03-12',
    source: '飞书纪要',
  },
  {
    customer: '星巴克中国',
    title: '门店数字化痛点梳理',
    keywords: ['门店运营', '报表工坊'],
    updatedAt: '2024-03-10',
    source: '现场录音',
  },
  {
    customer: '大疆创新',
    title: '售后服务 AI 质检可行性',
    keywords: ['质检', 'Agent'],
    updatedAt: '2024-03-08',
    source: '微信记录',
  },
  {
    customer: '安琪酵母',
    title: 'Q1 商机复盘与下一步动作',
    keywords: ['商机', '季度复盘'],
    updatedAt: '2024-03-05',
    source: '洞察报告',
  },
]
