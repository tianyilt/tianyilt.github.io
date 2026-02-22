---
permalink: /zh/
title: ""
excerpt: ""
author_profile: true
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

我是上海创智学院(SII) [OpenMoss 团队](https://openmoss.github.io/)的博士二年级研究生，师从[复旦大学邱锡鹏教授](https://xpqiu.github.io/)和[华东师范大学李晨晖教授](http://chenhui.li/)。博士一年级期间，我曾在上海人工智能实验室 InternLM 团队，师从[郭琦鹏博士](https://scholar.google.com/citations?user=k3mPGKgAAAAJ&hl=en)从事研究工作。我于华东师范大学计算机科学与技术专业获得学术型硕士学位（2021-2024），师从李晨晖教授和王长波教授；本科就读于华东理工大学数学与应用数学、计算机科学专业（2017-2021）。我的研究方向包括图像生成、视频生成、多模态智能体的测试时规模化（test-time scaling）以及计算机图形学。

我曾担任 ICLR、IEEE VIS、CVPR、NeurIPS 等顶级学术会议的审稿人。我对每篇论文的审稿时间不少于4小时，积极参与作者Rebuttal环节，鼓励创新且本质性的工作，打分高于社区平均水平，因此我不惧去匿名化，我的审稿质量也得到了作者和领域主席的认可。


# 🔥 最新动态
- *2026.02*: &nbsp;🎉 2篇论文被 CVPR 2026 录用。
- *2026.01*: &nbsp;🎉 作为团队负责人发布 MOVA，一个开源视频-音频联合生成模型，获得 sglang 社区 day-0 支持。
- *2025.12*: &nbsp;🎉 入选2025年中国科协青年科技人才培育工程博士生专项计划（录取率0.5%）。
- *2025.11*: &nbsp;🎉 1篇论文被 AAAI 2026 录用。
- *2025.10*: &nbsp;🎖️ 获得博士研究生优秀学业奖学金一等奖（前2%）。
- *2025.07*: &nbsp;🎉 1篇论文被 ACM MM 2025 录用。
- *2025.07*: &nbsp;🎉 1篇论文被 IEEE VIS 2025 录用。
- *2025.05*: &nbsp;🎉 1篇论文被 ICML 2025 录用。
- *2025.05*: &nbsp;🎉 1篇论文被 ACL 2025（主会）录用。
- *2024.03*: &nbsp;🎓 通过上海创智学院(SII)春令营选拔，获得录取资格，预计2025年9月入学。
- *2024.09*: &nbsp;🎓 开始在华东师范大学上海智能教育研究院攻读博士学位。
- *2024.05*: &nbsp;💼 加入上海人工智能实验室 InternLM 团队，担任大语言模型算法研究实习生。


# 🔧 学术服务
<div class="mainitem" id="academic-services">
    <div class="newsitem">
        <table style="border-collapse: collapse; border: none;">
            <tbody>
                <tr style="border: none;">
                    <td valign="TOP" width="200px" align="LEFT" style="border: none;">
                        <div class="newsdate" style="font-variant: small-caps;font-size: 14px;">
                        &nbsp;&nbsp; 程序委员会委员：
                        </div>
                    </td>
                    <td valign="TOP" align="LEFT" style="border: none;">
                        <div class="newstext" style="font-size: 14px;">
                             AAAI 2026
                        </div>
                    </td>
                </tr>
                <tr style="border: none;">
                    <td valign="TOP" width="200px" align="LEFT" style="border: none;">
                        <div class="newsdate" style="font-variant: small-caps;font-size: 14px;">
                        &nbsp;&nbsp; 审稿人：
                        </div>
                    </td>
                    <td valign="TOP" align="LEFT" style="border: none;">
                        <div class="newstext" style="font-size: 14px;">
                             ICLR, IEEE TVCG, IEEE VIS, CVPR, AAAI, NeurIPS, ICML
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>


# 📝 论文发表


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2025</div><a href='/images/2025_icml_poster.jpg'><img src='/images/2025_icml_poster.jpg' alt="TextCenGen" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

**TextCenGen: Attention-Guided Text-Centric Background Adaptation for Text-to-Image Generation**
<span style="color:#8c1d1d">梁天一</span><sup>&#8224;</sup>, Jiangqi Liu<sup>&#8224;</sup>, Yifei Huang, Shiqi Jiang, Jianshen Shi, Changbo Wang, Chenhui Li*.
ICML 2025，已录用（CCF A）
[arXiv](https://arxiv.org/abs/2404.11824) &nbsp;|&nbsp; [代码](https://github.com/tianyilt/TextCenGen_Background_Adapt) &nbsp;|&nbsp; [项目主页](/textcengen/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><a href='/images/2025_consensus_entropy.png'><img src='/images/2025_consensus_entropy.png' alt="Consensus Entropy" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

**Consensus Entropy: Harnessing Multi-VLM Agreement for Self-Verifying and Self-Improving OCR**
Yulong Zhang<sup>&#8224;</sup>, <span style="color:#8c1d1d">梁天一</span><sup>&#8224;</sup>, Xinyue Huang, Erfei Cui, Guoqing Wang, Xu Guo, Chenhui Li, Gongshen Liu*
<sup>&#8224;</sup>同等贡献
[arXiv](https://arxiv.org/abs/2504.11101) &nbsp;|&nbsp; [代码](https://github.com/Aslan-yulong/consencus-entropy)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE VIS 2025</div><a href='/images/2026_tvcg_sel3dcraft.png'><img src='/images/2026_tvcg_sel3dcraft.png' alt="Sel3DCraft" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

**Sel3DCraft: Interactive Visual Prompts for User-Friendly Text-to-3D Generation**
Nan Xiang<sup>&#8224;</sup>, <span style="color:#8c1d1d">梁天一</span><sup>&#8224;</sup>, Haiwen Huang, Shiqi Jiang, Hao Huang, Liangyu Chen, Changbo Wang, Chenhui Li*
IEEE Transactions on Visualization and Computer Graphics, 2026（IEEE VIS'25）（CCF A，JCR Q1）
[arXiv](https://arxiv.org/abs/2508.00428) &nbsp;|&nbsp; [代码](https://github.com/tianyilt/Sel3DCraft)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><a href='/images/2025_cvpr_thinkingwithvideo.png'><img src='/images/2025_cvpr_thinkingwithvideo.png' alt="Thinking with Video" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

**Thinking with Video: Video Generation as a Promising Multimodal Reasoning Paradigm**
Jingqi Tong<sup>&#8224;</sup>, Yurong Mou<sup>&#8224;</sup>, Hangcheng Li<sup>&#8224;</sup>, Mingzhe Li<sup>&#8224;</sup>, Yongzhuo Yang<sup>&#8224;</sup>, Ming Zhang, Qiguang Chen, <span style="color:#8c1d1d">梁天一</span>, Xiaomeng Hu, Yining Zheng, Xinchi Chen, Jun Zhao*, Xuanjing Huang, Xipeng Qiu*
CVPR 2026，已录用（CCF A）
[arXiv](https://arxiv.org/abs/2511.04570) &nbsp;|&nbsp; [代码](https://github.com/OpenMOSS/Thinking-with-Video) &nbsp;|&nbsp; [项目主页](https://thinking-with-video.github.io/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2025</div><a href='/images/2025_acl_critiq.png'><img src='/images/2025_acl_critiq.png' alt="CritiQ" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

**CritiQ: Mining Data Quality Criteria from Human Preferences**
Honglin Guo, Kai Lv, Qipeng Guo, <span style="color:#8c1d1d">梁天一</span>, Zhiheng Xi, Demin Song, Qiuyinzhe Zhang, Yu Sun, Kai Chen, Xipeng Qiu, Tao Gui*
ACL 2025，已录用（主会）
[arXiv](https://arxiv.org/abs/2502.19279) &nbsp;|&nbsp; [代码](https://github.com/KYLN24/CritiQ)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MM 2025</div><a href='/images/2025_mm_music2.png'><img src='/images/2025_mm_music2.png' alt="Music2Palette" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

**Music2Palette: Emotion-aligned Color Palette Generation via Cross-Modal Representation Learning**
Jiayun Hu, Yueyi He, <span style="color:#8c1d1d">梁天一</span>, Changbo Wang, Chenhui Li*
ACM MM 2025，已录用（CCF A）
[arXiv](https://arxiv.org/abs/2507.04758)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv</div><a href='/images/2025_IFDecorator.png'><img src='/images/2025_IFDecorator.png' alt="IFDecorator" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

**IFDECORATOR: Wrapping Instruction Following Reinforcement Learning with Verifiable Rewards**
Xu Guo<sup>&#8224;</sup>, <span style="color:#8c1d1d">梁天一</span><sup>&#8224;</sup>, Tong Jian, Xiaogui Yang, Ling-I Wu, Chenhui Li, Zhihui Lu*, Qipeng Guo*, Kai Chen*
<sup>&#8224;</sup>同等贡献
[arXiv](https://arxiv.org/abs/2508.04632) &nbsp;|&nbsp; [代码](https://github.com/guox18/IFDecorator) &nbsp;|&nbsp; [项目主页](https://tianyilt.github.io/ifdecorator/)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv</div><a href='/images/2024_gaokao_eval_arxiv.png'><img src='/images/2024_gaokao_eval_arxiv.png' alt="GAOKAO-Eval" width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

**GAOKAO-Eval: Does high scores truly reflect strong capabilities in LLMs?**
Zhikai Lei<sup>&#8224;</sup>, <span style="color:#8c1d1d">梁天一</span><sup>&#8224;</sup>, Hanglei Hu<sup>&#8224;</sup>, Jin Zhang, Yunhua Zhou, Yunfan Shao, Linyang Li, Chenchui Li, Changbo Wang, Hang Yan*, Qipeng Guo
<sup>&#8224;</sup>同等贡献
[arXiv](https://arxiv.org/abs/2412.10056) &nbsp;|&nbsp; [代码](https://github.com/open-compass/GAOKAO-Eval) &nbsp;|&nbsp; [模型](https://huggingface.co/internlm/internlm2-wqx-20b)

</div>
</div>


# 💼 实习经历

- *2024.5 - 2025.8*：**上海人工智能实验室**，大语言模型算法研究实习生
  - 参与 Open-Compass [高考评测](https://github.com/open-compass/GAOKAO-Eval) 与 [InternLM2-WQX-VL-20B](https://modelscope.cn/models/Shanghai_AI_Laboratory/internlm2-wqx-vl-20b/summary) 的研究工作。
  - 为 InternLM3 项目开发了一套创新的基于验证器引导的工作流，用于网页数据和 PDF 语料的质量控制。提出了一种基于反思的标准优化方法，将异常样本检测 F1 值从66%提升至86%。详细内容可参见 [CritiQ](https://github.com/KYLN24/CritiQ)。
  - 开展 LLM-as-Judge 及面向[大语言模型预训练](https://github.com/InternLM/InternLM)的合成数据生成研究。实现了领域过滤和验证器引导改写技术，在保持模型性能的前提下将所需训练数据量减少了85%。由上海人工智能实验室[郭启鹏博士](https://scholar.google.com/citations?user=k3mPGKgAAAAJ&hl=en)指导。


# 💻 项目

<div class='paper-box'><div class='paper-box-image'><div><div class="badge-github"><img src="https://img.shields.io/github/stars/OpenMOSS/MOVA?style=social" alt="GitHub stars"></div><img src='/images/mova.png' alt="MOVA" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**MOVA: Towards Scalable and Synchronized Video-Audio Generation**
角色：**团队负责人**
一个用于同步视频-音频生成的基础模型，打破了开源视频生成领域的"无声时代"。MOVA 能够在单次推理中生成高保真视频与同步音频，达到最先进的唇形同步性能。
[arXiv](https://arxiv.org/abs/2602.08794) &nbsp;|&nbsp; [GitHub](https://github.com/OpenMOSS/MOVA) &nbsp;|&nbsp; [项目主页](https://mosi.cn/models/mova)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge-github"><img src="https://img.shields.io/github/stars/OpenMOSS/DiRL?style=social" alt="GitHub stars"></div><img src='/images/DiRL.jpg' alt="DiRL" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**DiRL: An Efficient Post-Training Framework for Diffusion Language Models**
角色：贡献者
一个用于扩散语言模型的开源后训练框架，支持 SFT 和 RL 两个阶段。DiRL-8B-Instruct 在数学推理基准测试中以8B规模达到最先进水平，在大多数任务上超越了32B的模型。
[GitHub](https://github.com/OpenMOSS/DiRL) &nbsp;|&nbsp; [arXiv](https://arxiv.org/abs/2512.22234)

</div>
</div>

## 开源课程共享项目

- **[ECUST-CourseShare](https://github.com/tianyilt/ecust-CourseShare)**

  ![GitHub stars](https://img.shields.io/github/stars/tianyilt/ecust-CourseShare?style=social) ![GitHub forks](https://img.shields.io/github/forks/tianyilt/ecust-CourseShare?style=social)
  华东理工大学综合课程资源共享平台。本项目旨在构建一个协作平台，学生可以在此共享课程资料、历年真题和学习资源，涵盖各院系，提供历年真题、复习材料、教师课件和作业答案。

- **[ECNU-PGCourseShare](https://github.com/tianyilt/ecnu-PGCourseShare)**

  ![GitHub stars](https://img.shields.io/github/stars/tianyilt/ecnu-PGCourseShare?style=social) ![GitHub forks](https://img.shields.io/github/forks/tianyilt/ecnu-PGCourseShare?style=social)
  华东师范大学研究生课程资源共享平台。本项目超越基础课程资料，整合学术情报资源，帮助研究生了解研究领域、发现合作机会，并获取前沿学术工具和最佳实践。

## 社区平台

- **[ECNU Forum](https://github.com/ECNU-Forum/ECNU-Forum)**

  ![GitHub stars](https://img.shields.io/github/stars/ECNU-Forum/ECNU-Forum?style=social) ![GitHub forks](https://img.shields.io/github/forks/ECNU-Forum/ECNU-Forum?style=social)
  面向华东师范大学学生的现代化论坛平台，基于 Flarum 构建。论坛地址 [ecnu.im](https://ecnu.im)，为华师大学生提供一个自由交流、思想碰撞的空间。这是一个非官方的社区驱动平台，促进学生之间的学术与社交互动。

## 研究项目

- **[GAOKAO-Eval](https://github.com/open-compass/GAOKAO-Eval)**

  ![GitHub stars](https://img.shields.io/github/stars/open-compass/GAOKAO-Eval?style=social) ![GitHub forks](https://img.shields.io/github/forks/open-compass/GAOKAO-Eval?style=social)
  面向大语言模型的中国高考任务评测基准，在 OpenCompass 生态中提供数据集、评测流程和可复现脚本。

# 🎖 荣誉奖项
- *2025.12*：2025年中国科协青年科技人才培育工程博士生专项计划（录取率0.5%）
- *2025.10*：博士研究生优秀学业奖学金一等奖（前2%）
- *2021.7*：上海市优秀毕业生 & 优秀毕业论文（前5%）
- *2019.12*：全国大学生数学建模竞赛上海赛区一等奖
- *2019.12*：国家奖学金（前1%）
- *2018.12*：上海市奖学金（前1%）