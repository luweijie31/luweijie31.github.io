import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: '鲁伟杰',
    photoBackEmoji: '',
    title: {
      zh: 'LIMS实施工程师求职方向',
      en: 'LIMS Implementation Engineer Candidate',
    },
    subtitle: {
      zh: '需求分析 · SQL/MySQL · Linux/Docker · 文档与交付支持',
      en: 'Requirement analysis · SQL/MySQL · Linux/Docker · Documentation & delivery support',
    },
    summary: {
      zh: [
        '具备较强的学习能力、沟通能力和执行推进能力，能够较快理解业务流程、系统逻辑及客户需求。',
        '有运营实习、学生组织统筹及项目协作经历，积累了需求确认、流程跟进、跨角色沟通、文档整理和交付检查经验。',
        '具备 Java、MySQL、SQL 基础，了解 RuoYi 框架，可使用 Docker 进行基础部署，熟悉 Windows、Linux 基础操作。',
        '主动了解过 LIMS 系统的样品流转、数据追溯、报告管理等场景，希望在实施工程师岗位上持续提升需求分析、文档输出、系统支持和项目交付能力。',
      ],
      en: [
        'Fast learner with solid communication and execution skills, able to understand business workflows, system logic, and client requirements quickly.',
        'Backed by internship, student leadership, and project collaboration experience, with hands-on practice in requirement confirmation, process tracking, cross-role communication, documentation, and delivery checking.',
        'Has a working foundation in Java, MySQL, and SQL, with basic knowledge of the RuoYi framework, Docker-based deployment, and everyday Windows/Linux operations.',
        'Familiar with LIMS scenarios such as sample circulation, data traceability, and report management, with a clear goal to grow further in requirement analysis, documentation, system support, and project delivery.',
      ],
    },
    location: 'China',
  },

  seo: {
    title: 'LIMS实施工程师求职方向 | 鲁伟杰',
    description: 'Bilingual resume site for an implementation-engineer candidate focused on system delivery, process support, and LIMS-related business scenarios.',
  },

  languages: {
    default: 'zh',
    available: ['zh', 'en'],
    labels: {
      zh: '中文',
      en: 'EN',
    },
  },

  contact: [
    { type: 'email', label: '2090432713@qq.com' },
    { type: 'phone', label: '13218714668' },
    { type: 'location', label: '求职意向：上海 / Open to Shanghai' },
  ],

  skills: [
    {
      title: { zh: '系统与工具', en: 'Systems & Tools' },
      type: 'badges',
      items: [
        { name: 'Java' },
        { name: 'Spring Boot' },
        { name: 'MySQL' },
        { name: 'SQL' },
        { name: 'Linux' },
        { name: 'HTML/CSS' },
        { name: 'Docker' },
        { name: 'RuoYi' },
      ],
    },
    {
      title: { zh: '实施相关能力', en: 'Implementation Support' },
      type: 'badges',
      items: [
        { name: '需求沟通' },
        { name: '需求分析' },
        { name: '流程梳理' },
        { name: '问题排查' },
        { name: '交付支持' },
        { name: '设计文档' },
        { name: '验收检查' },
      ],
    },
    {
      title: { zh: '办公与汇报', en: 'Office & Reporting' },
      type: 'text',
      items: [
        {
          name: {
            zh: '熟悉 Word、Excel、PPT，可完成文档整理、数据汇总、汇报材料制作与日常事务支持',
            en: 'Comfortable with Word, Excel, and PowerPoint for documentation, data organization, reporting materials, and delivery support',
          },
        },
      ],
    },
  ],

  experiences: [
    {
      id: 'project-collaboration',
      company: { zh: '项目协作接单', en: 'Independent Project Collaboration' },
      role: { zh: '需求分析与交付协作', en: 'Requirement Analysis & Delivery Support' },
      type: { zh: '实践经历', en: 'Project-Based Work' },
      period: { zh: '在校期间', en: 'During university' },
      description: {
        zh: '与朋友协作承接部分毕设、课设及小型项目系统，主要负责前期需求分析、方案梳理、设计文档撰写及最终交付检查，锻炼了项目推进和客户沟通能力。',
        en: 'Collaborated with a friend on graduation projects, course projects, and small system builds, mainly handling early requirement analysis, solution structuring, design documentation, and final delivery checks.',
      },
      techs: ['需求分析', '设计文档', '交付检查'],
      isHighlighted: true,
      details: {
        context: {
          zh: '项目类型以学生项目和小型系统需求为主，需要先理解对方目标，再整理功能范围、页面逻辑和交付节点。',
          en: 'Most work involved student-led projects and small system requests, where the first step was to understand the target outcome, then structure features, page logic, and delivery milestones.',
        },
        tasks: {
          zh: [
            '主导前期需求沟通与需求分析，梳理功能范围、使用流程及页面逻辑',
            '根据需求输出设计说明、功能文档等材料，支持项目开发推进',
            '在交付前对功能、页面和基础数据进行检查，确保交付内容与需求一致',
          ],
          en: [
            'Led early-stage requirement communication and analysis to define scope, user flow, and page logic',
            'Produced design notes and feature documents to support implementation progress',
            'Checked functions, pages, and basic data before delivery to keep outputs aligned with agreed requirements',
          ],
        },
        env: {
          zh: '需求分析 / 设计文档 / 流程梳理 / 交付检查 / 协作沟通',
          en: 'Requirement analysis / Design documents / Process structuring / Delivery checks / Collaboration',
        },
      },
    },
    {
      id: 'focus-education',
      company: { zh: '焦点教育', en: 'Focus Education' },
      role: { zh: '运营专员实习生', en: 'Operations Intern' },
      type: { zh: '实习', en: 'Internship' },
      period: { zh: '在校期间', en: 'During university' },
      description: {
        zh: '负责学校试卷与答题卡的制作及交付支持，跟进从需求确认到成品输出的全过程，积累了需求对接、交付跟进和问题排查经验。',
        en: 'Supported the full delivery cycle of school exam papers and answer sheets, from requirement confirmation to final output, building experience in requirement handling, delivery follow-up, and issue checking.',
      },
      techs: ['需求沟通', '交付支持', '问题排查'],
      isHighlighted: true,
      details: {
        context: {
          zh: '面向学校老师的服务场景，需要在固定时间节点内完成材料制作、内容校对与交付，强调准确性和沟通效率。',
          en: 'Worked in a school-facing service context with fixed deadlines, where output accuracy, fast communication, and steady follow-up were essential.',
        },
        tasks: {
          zh: [
            '跟进试卷与答题卡从需求确认到成品输出的全过程，确保材料按时、准确交付',
            '与学校老师对接需求及反馈，及时协调调整内容与格式',
            '排查制作过程中的问题并进行多轮校对，保障材料准确性',
          ],
          en: [
            'Tracked the full process from requirement confirmation to final delivery to ensure on-time and accurate output',
            'Communicated with teachers on requirement changes and formatting feedback, then coordinated updates quickly',
            'Checked production issues and completed multiple rounds of proofreading to keep materials accurate',
          ],
        },
        env: {
          zh: '需求确认 / 文档制作 / 校对优化 / 交付跟进 / 客户沟通 / 材料整理',
          en: 'Requirement confirmation / Document production / Proofreading / Delivery follow-up / Client communication / Material organization',
        },
      },
    },
    {
      id: 'student-union',
      company: { zh: '院学生会', en: 'College Student Union' },
      role: { zh: '部长', en: 'Department Minister' },
      type: { zh: '组织经历', en: 'Leadership Experience' },
      period: { zh: '在校期间', en: 'During university' },
      description: {
        zh: '统筹大型校园活动策划与执行，负责人员协调、现场流程和材料管理，锻炼了事务推进与团队协同能力。',
        en: 'Coordinated campus events end-to-end, covering staffing, on-site process control, and material management, which strengthened execution and collaboration skills.',
      },
      techs: ['活动统筹', '流程推进', '团队协作'],
      details: {
        context: {
          zh: '作为院学生会部长，需要兼顾活动策划、预案准备、人员协调和现场执行，任务链条完整，节奏较快。',
          en: 'As a student-union department leader, the work covered planning, contingency preparation, team coordination, and live execution in a fast-paced environment.',
        },
        tasks: {
          zh: [
            '统筹“科技文化节”汇报展演的策划与执行，协调人员分工、场地安排及现场流程，吸引 800+ 名师生参与',
            '主导春日摄影大赛的方案制定与执行推进，完成活动预案设计及线上征集、投票组织，吸引 400+ 名学生参与',
            '负责学生会物料及院内学生材料的收集、整理和管理，保障信息准确和流程顺畅',
          ],
          en: [
            'Led planning and execution for the Science & Culture Festival presentation event, coordinating staffing, venue arrangements, and on-site flow for 800+ participants',
            'Designed and executed the Spring Photography Contest, including contingency planning, submission collection, and online voting for 400+ participants',
            'Managed union materials and internal student documents to keep information accurate and processes orderly',
          ],
        },
        env: {
          zh: '活动策划 / 现场执行 / 事务推进 / 材料管理 / 团队协同',
          en: 'Event planning / On-site execution / Operational coordination / Material management / Team collaboration',
        },
      },
    },
  ],

  projects: [
    {
      id: 'trade-system',
      title: { zh: '商品交易管理系统', en: 'Product Trading Management System' },
      description: {
        zh: '独立完成商品交易管理系统的需求分析、功能设计与开发实现。',
        en: 'Independently completed requirement analysis, functional design, and implementation for a product trading management system.',
      },
      highlights: {
        zh: [
          '围绕商品发布审核、检索、下单、订单查询等核心环节梳理并实现较完整的交易管理流程。',
          '设计并实现用户、商品、订单等核心模块，完成认证、权限控制、实时沟通及后台统计功能。',
          '在项目中积累了系统流程设计、SQL/MySQL 数据处理和基础部署支持的实践经验。',
        ],
        en: [
          'Structured and implemented a full transaction workflow covering product review, search, ordering, and order tracking.',
          'Built core user, product, and order modules with authentication, permission control, real-time communication, and back-office statistics.',
          'Gained hands-on experience in workflow design, SQL/MySQL data handling, and basic deployment support.',
        ],
      },
      techs: ['Java', 'Spring Boot', 'Vue3', 'MySQL', 'JWT', 'WebSocket', 'ECharts'],
    },
  ],

  education: [],

  theme: {
    preset: 'ocean',
    defaultMode: 'light',
  },

  labels: {
    sections: {
      contact: { zh: '联系方式', en: 'CONTACT' },
      skills: { zh: '技能与能力', en: 'SKILLS' },
      profile: { zh: '个人总结', en: 'PROFILE' },
      experience: { zh: '实践经历', en: 'EXPERIENCE' },
      education: { zh: '教育经历', en: 'EDUCATION' },
      projects: { zh: '项目经历', en: 'PROJECTS' },
    },
    experience: {
      mainTasks: { zh: '主要内容：', en: 'Highlights:' },
      moreTasks: { zh: '更多内容...', en: 'more...' },
      techEnv: { zh: '相关场景：', en: 'Context:' },
      technologies: { zh: '技术 / 关键词', en: 'Technologies / Keywords' },
    },
    actions: {
      clickHint: {
        zh: '点击经历卡片可查看更详细的内容',
        en: 'Click an experience card to view more details',
      },
      switchTheme: {
        zh: '切换深浅色模式',
        en: 'Toggle light and dark mode',
      },
    },
  },
}
