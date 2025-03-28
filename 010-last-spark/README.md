#  💼 打工人的最后倔强
**Last Spark: A Calendar App for Surviving Workdays**

This is a daily encouragement & emotional survival calendar built for modern workers.  
Each day brings a new message of motivation, satire, or simply… acknowledgment of struggle.
"Some days, we thrive. Some days, we survive. Either way, we show up."


``` text
last-spark/
├── app.py                    # Flask 主程序（中英切换、语录接口）
├── requirements.txt          # 项目依赖
├── static/
│   └── style.css             # 可选样式文件
├── templates/
│   └── index.html            # 主页面（语言按钮 + 今日语录）
├── phrases/
│   ├── en.json               # 英文语录池
│   └── zh.json               # 中文语录池
├── utils/
│   └── language.py           # 中英切换逻辑封装（可选）
├── README.md
└── .gitignore
```

# ✨ 页面功能设想（index.html）
元素	功能
🌍 Language toggle	点击切换中英文
📅 今日日期	动态展示今天几号
💬 今日语录	随机 or 按天显示一条语录
📌 标签（可选）	“#打工人必看 #摸鱼励志” 等
⏳ 明日预告（可选）	“明天准备了一句更硬核的”等