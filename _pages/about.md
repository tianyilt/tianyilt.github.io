---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a PhD student starting from September 2024, supervised by [Prof. Chenhui Li](http://chenhui.li/) at the [Shanghai Institute of AI Education, East China Normal University](https://aiedu.ecnu.edu.cn/), and also working with the InternLM team led by [Dr. Qipeng Guo](https://scholar.google.com/citations?user=k3mPGKgAAAAJ&hl=en) at the [Shanghai Artificial Intelligence Laboratory](https://www.shlab.org.cn/) and Shanghai Innovation Institute. I completed my Academic Master's degree in Computer Science and Technology at East China Normal University supervised by [Prof. Chenhui Li](http://chenhui.li/)  and Prof. Changbo Wang (2021-2024) and my undergraduate studies in Mathematics & Applied Mathematics and Computer Science at East China University of Science and Technology (2017-2021). My research focuses on cross-modal LLM Agents, multimodal image editing, and computer graphics. I have served as a reviewer for top-tier conferences including IEEE VIS and CVPR.



# 🔥 News
- *2025.07*: &nbsp;🎉 1 paper accepted to ACM MM 2025.
- *2025.06*: &nbsp;🎉 1 paper conditionally accepted to IEEE VIS 2025.
- *2025.05*: &nbsp;🎉 1 paper accepted to ICML 2025.
- *2025.05*: &nbsp;🎉 1 paper accepted to ACL (main) 2025.
- *2024.03*: &nbsp;🎓 Secured a admission offer through the Spring Camp selection at the Shanghai Innovation Institute; expected to enroll in September 2025.
- *2024.09*: &nbsp;🎓 Starting my PhD at Shanghai Institute of AI Education, East China Normal University.
- *2024.05*: &nbsp;💼 Joined the InternLM group at Shanghai Artificial Intelligence Laboratory as a LLM Research Intern.


# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2025</div><a href='images/2025_icml_poster.jpg'><img src='images/2025_icml_poster.jpg' alt="TextCenGen" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

**TextCenGen: Attention-Guided Text-Centric Background Adaptation for Text-to-Image Generation**  
<span style="color:#8c1d1d">Tianyi Liang</span><sup>&#8224;</sup>, Jiangqi Liu<sup>&#8224;</sup>, Yifei Huang, Shiqi Jiang, Jianshen Shi, Changbo Wang, and Chenhui Li*.  
ICML 2025, Accepted (CCF A)  
[arXiv](https://arxiv.org/abs/2404.11824) &nbsp;|&nbsp; [Code](https://github.com/tianyilt/TextCenGen_Background_Adapt) &nbsp;|&nbsp; [Project Page](/textcengen/)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2025</div><a href='images/2025_acl_critiq.png'><img src='images/2025_acl_critiq.png' alt="CritiQ" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

**CritiQ: Mining Data Quality Criteria from Human Preferences**  
Honglin Guo, Kai Lv, Qipeng Guo, <span style="color:#8c1d1d">Tianyi Liang</span>, Zhiheng Xi, Demin Song, Qiuyinzhe Zhang, Yu Sun, Kai Chen, Xipeng Qiu, Tao Gui  
ACL 2025, Accepted (Main Conference)  
[arXiv](https://arxiv.org/abs/2502.19279) &nbsp;|&nbsp; [Code](https://github.com/KYLN24/CritiQ)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv</div><a href='images/2025_consensus_entropy.png'><img src='images/2025_consensus_entropy.png' alt="Consensus Entropy" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

**Consensus Entropy: Harnessing Multi-VLM Agreement for Self-Verifying and Self-Improving OCR**  
Yulong Zhang<sup>&#8224;</sup>, <span style="color:#8c1d1d">Tianyi Liang</span><sup>&#8224;</sup>, Xinyue Huang, Erfei Cui, Xu Guo, Pei Chu, Chenhui Li, Ru Zhang, Gongshen Liu  
<sup>&#8224;</sup>Equal contribution  
[arXiv](https://arxiv.org/abs/2504.11101) &nbsp;|&nbsp; [Code](https://github.com/Aslan-yulong/consencus-entropy)

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv</div><a href='images/2024_gaokao_eval_arxiv.png'><img src='images/2024_gaokao_eval_arxiv.png' alt="GAOKAO-Eval" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

**GAOKAO-Eval: Does high scores truly reflect strong capabilities in LLMs?**  
Zhikai Lei<sup>&#8224;</sup>, <span style="color:#8c1d1d">Tianyi Liang</span><sup>&#8224;</sup>, Hanglei Hu<sup>&#8224;</sup>, Jin Zhang, Yunhua Zhou, Yunfan Shao, Linyang Li, Chenchui Li, Changbo Wang, Hang Yan, Qipeng Guo  
<sup>&#8224;</sup>Equal contribution  
[arXiv](https://arxiv.org/abs/2412.10056) &nbsp;|&nbsp; [Code](https://github.com/open-compass/GAOKAO-Eval) &nbsp;|&nbsp; [Model](https://huggingface.co/internlm/internlm2-wqx-20b)

</div>
</div>






# 💼 Internships

- *2024.5 - Present*: **Shanghai Artificial Intelligence Laboratory**, LLM Algorithm Research Intern
  - Research on Open-Compass [GAOKAO evaluation](https://github.com/open-compass/GAOKAO-Eval) and [InternLM2-WQX-VL-20B](https://modelscope.cn/models/Shanghai_AI_Laboratory/internlm2-wqx-vl-20b/summary)
  - Developed an innovative Verifier-Guided workflow for quality control of Web Data and PDF corpora in InternLM3 project. Proposed a novel reflection-based criteria optimization method, improving bad case detection F1-score from 66% to 86%. More details can be found in [CritiQ](https://github.com/KYLN24/CritiQ).
  - Conducting research on LLM-as-Judge and synthetic data generation for [large language model pre-training](https://github.com/InternLM/InternLM). Implemented domain filtering and Verifier-Guided Rephrase techniques, reducing required training data by 85% while maintaining model performance.

<!-- - *2023.5 - 2023.12*: **Shanghai i.Lion Educational Technology Co., Ltd.**, Technical Partner
  - Developed an education-focused knowledge retrieval system for youth scientific innovation projects
  - Implemented parallel search and summary generation systems -->

<!-- - *2019.7 - 2019.8*: **DeepBlue Technology Research Institute**, Computer Vision Engineer Intern
  - Implemented DotFile+Docker for rapid deployment and testing
  - Built buffer for asynchronous requests using Tornado framework, increasing frame rate from 5 to 30 fps -->


# 💻 Projects

## Open Source Course Sharing Initiatives

- **[ECUST-CourseShare](https://github.com/tianyilt/ecust-CourseShare)** 
  
  ![GitHub stars](https://img.shields.io/github/stars/tianyilt/ecust-CourseShare?style=social) ![GitHub forks](https://img.shields.io/github/forks/tianyilt/ecust-CourseShare?style=social)  
  A comprehensive course resource sharing platform for East China University of Science and Technology. This project aims to build a collaborative platform where students can share course materials, exam papers, and study resources. It covers various departments and provides historical exam papers, review materials, teacher courseware, and homework answers.

- **[ECNU-PGCourseShare](https://github.com/tianyilt/ecnu-PGCourseShare)**  
  
  ![GitHub stars](https://img.shields.io/github/stars/tianyilt/ecnu-PGCourseShare?style=social) ![GitHub forks](https://img.shields.io/github/forks/tianyilt/ecnu-PGCourseShare?style=social)  
  Graduate course resource sharing platform for East China Normal University. This project extends beyond basic course materials to include academic intelligence resources, helping graduate students navigate research fields, discover collaboration opportunities, and access cutting-edge academic tools and best practices.

## Community Platform

- **[ECNU Forum](https://github.com/ECNU-Forum/ECNU-Forum)**  
  
  ![GitHub stars](https://img.shields.io/github/stars/ECNU-Forum/ECNU-Forum?style=social) ![GitHub forks](https://img.shields.io/github/forks/ECNU-Forum/ECNU-Forum?style=social)  
  A modern forum platform based on Flarum for East China Normal University students. The live forum is accessible at [ecnu.im](https://ecnu.im), providing a space where ECNU students can freely communicate and exchange ideas. This is an unofficial community-driven platform that fosters academic and social interaction among students.


# 🎖 Honors and Awards
- *2021.7* Shanghai Outstanding Graduate & Outstanding Thesis Award
- *2019.12* National College Student Mathematical Modeling Competition, Shanghai Region First Prize
- *2019.12* National Scholarship
- *2018.12* Shanghai Scholarship

<!-- # 📖 Education
- *2024.9 - 2028.7*, PhD in Shanghai Institute of Intelligent Education, East China Normal University
- *2021.9 - 2024.11*, Academic Master in Computer Science and Technology, East China Normal University (GPA: 91.7/100.0)
- *2017.9 - 2021.7*, Undergraduate in Mathematics & Applied Mathematics and Computer Science, East China University of Science and Technology (GPA: 3.73/4.0, Ranking: 2/97, Top 2%) -->

<!-- # 💻 Technical Skills
- **Software Development**: PyTorch, Computer Vision Frameworks (Advanced), Data Processing
- **Backend**: FastAPI (API Development)
- **Frontend**: Vue, React, Three.js (Interactive Demos)
- **DevOps**: Docker (Advanced, Administrator)
- **English Proficiency**: CET-6 (562) -->