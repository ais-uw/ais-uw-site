---
title: "Discussion Group"
layout: ../layouts/Layout.astro
---

## Discussion Norms[^1]

**Taking ideas seriously.** Typically, conversations about ideas are like recreational diversions: we enjoy batting around interesting thoughts and saying smart things, and then we go back to doing whatever we were already doing in our lives. We think we should take a curious action guided mindset by asking ourselves questions like: “How could I tell if this idea were true? If it is true, what does that imply I should be doing differently in my life? What else does it imply I’m wrong about?” And, zooming out: “Where are my blind spots? Which important questions should I be thinking about that I’m not? Which people should I be talking to?” In other words, taking ideas seriously means treating our worldview as something that affects outcomes in the world we care about — and therefore, wanting to make our worldview as full and accurate as possible.

**Disagreements are useful.** When thoughtful people with access to the same information reach very different conclusions from each other, we should be curious about why. Often we tend to be incurious about this simply because it’s so common that we’re used to it. But if, for example, a medical community is divided on whether Treatment A or B does a better job of curing some disease, they should want to get to the bottom of that disagreement, because the right answer matters — lives are at stake.

**Strong opinions, weakly held.** Often people abstain from trying to have opinions about things because they think things like “I’m not an expert” or “It’s hard to know for sure.” Instead, during this program, we invite you to be bold enough to venture guesses, expressed clearly enough such that it’s easy for someone else, or evidence about the world, to prove you wrong. This doesn’t need to mean that you are confident, it is useful to express beliefs you’re only 25% sure of (and to say that you’re unsure), but it is easier to clear up uncertainty if you can talk about your uncertain guess as easily as you can talk about something you’re sure of.

## Overview

The course consists of 8 weeks of readings. Each week the group will meet for 1.5 hours to read, and then discuss what was read. Broadly speaking, the first half of the course explores the motivations and arguments underpinning the field of AGI safety, while the second half focuses on proposals for technical solutions.

Each week during meetings, there will be time to read the required readings. There are also optional readings each week if you are curious to learn more. Most people find some concepts from the readings confusing, but **that’s totally fine** \- resolving those uncertainties is what the discussion groups are for. Approximate times taken to read each piece in depth are listed next to them. **Note that in some cases only a small section of the linked reading is assigned**.

If you’ve already read some of the core readings, or want to learn more about the topic, then the further readings are recommended; see the notes for descriptions of them. In several cases, blog posts about machine learning papers are listed instead of the papers themselves; you’re only expected to read the blog posts, but for those with strong ML backgrounds reading the paper versions might be worthwhile.

Thanks to Harvard AAIST for curriculum resources.

## Week 0 (prereqs, optional): Introduction to machine learning

**Week 0 is intended as an optional introduction to machine learning, to provide a more thorough understanding of machine learning (ML), deep learning (DL), reinforcement learning (RL), and transformers for the rest of the fellowship. The first meeting will discuss Week 1 readings, not Week 0 readings.**

Main recommended resource:

1. [Neural Networks Chapters 1-6 (3Blue1Brown, 2017-2024)](https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&feature=shared) (2 hours).

Other recommended resources:

1. [A short introduction to machine learning (Ngo, 2021\)](https://www.alignmentforum.org/posts/qE73pqxAZmeACsAdF/a-short-introduction-to-machine-learning) (20 mins)
2. [Machine Learning for Humans, Part 2.1: Supervised Learning (Maini and Sabri, 2017\)](https://medium.com/@v_maini/supervised-learning-740383a2feab) (15 mins)
3. [What is self-supervised learning?](https://youtu.be/sJzuNAisXHA) (CodeBasics, 2021\) (5 mins)
4. [Introduction to reinforcement learning (von Hasselt, 2021\)](https://www.youtube.com/watch?v=TCCjZe0y4Qc&t=2m0s) **(from 2:00 to 1:02:10, ending at the beginning of the section titled _Inside the Agent: Models_)** (60 mins)
5. [The spelled-out intro to neural networks and backpropagation: building micrograd (Karpathy, 2022\)](https://youtu.be/VMj-3S1tku0) (150 mins)
6. [Transformers from scratch (Rohrer, 2021\)](https://e2eml.school/transformers.html)
7. [Machine learning for humans (Maini and Sabri, 2017\)](https://medium.com/machine-learning-for-humans/why-machine-learning-matters-6164faf1df12)
8. [Machine learning glossary (Google, 2017\)](https://developers.google.com/machine-learning/glossary)
9. Spinning up deep RL: [part 1](https://spinningup.openai.com/en/latest/spinningup/rl_intro.html) and [part 2](https://spinningup.openai.com/en/latest/spinningup/rl_intro2.html) (OpenAI, 2018\) (40 mins)
10. [A (long) peek into reinforcement learning (Weng, 2018\)](https://lilianweng.github.io/posts/2018-02-19-rl-overview/) (35 mins)

## Week 1: Reward misspecification, RLHF, and deception

A basic obstacle to training aligned AI systems is specifying what we would like our AI systems to do. Historically, AI systems were trained to maximize simple proxy objectives, leading to undesired behavior as AI systems learned to exploit these proxies. Modern frontier AI systems are instead trained using variants of RL from human feedback, where the objective being maximized is human evaluator approval. However, “human evaluator approval” is still an imperfect proxy for the behaviors we actually want; for instance, human evaluators can be deceived. As we scale AI systems to tasks that we cannot reliably evaluate, one concern is that we may select for systems which more competently deceive their human evaluators.

Core readings:

1. [Specification gaming: the flip side of AI ingenuity (Krakovna et al., 2020\)](https://www.deepmind.com/blog/specification-gaming-the-flip-side-of-ai-ingenuity) (15 mins)
2. [Deep RL from human preferences: blog post (Christiano et al., 2017\)](https://openai.com/blog/deep-reinforcement-learning-from-human-preferences/) (5 mins)
3. [The alignment problem from a deep learning perspective (Ngo, Chan and Mindermann, 2022\)](https://arxiv.org/abs/2209.00626) **(only section 2: Deceptive reward hacking)** (5 mins)
4. [Language Models Learn to Mislead Humans via RLHF](https://arxiv.org/pdf/2409.12822) **(Sections 1 and 2\)** (10 minutes)
5. [Gallery of deceptive behavior (Marks, 2023\)](https://docs.google.com/presentation/d/1U_B1eciz0zW2sVnt_28W9zHPrB8nCUBvyffBlvPVnm0/edit?usp=sharing) (10 mins)
6. [Another (outer) alignment failure story (Christiano, 2021\)](https://www.alignmentforum.org/posts/AyNHoTWWAJ5eb99ji/another-outer-alignment-failure-story) (15 mins)

Further readings:

1. [Emergent Deception and Emergent Optimization (Steinhardt, 2023\)](https://bounded-regret.ghost.io/emergent-deception-optimization/) **(ending at “Emergent Optimization”)** (10 mins)
2. [On the opportunities and risks of foundation models (Bommasani et al., 2022\)](https://arxiv.org/abs/2108.07258) **(only pages 3-6)** (10 mins)
3. [Aligning language models to follow instructions: blog post (Ouyang et al., 2022\)](https://openai.com/blog/instruction-following/) (10 mins)
4. [Scaling Laws for Reward Model Overoptimization (Gao et al., 2022\)](https://arxiv.org/abs/2210.10760) **(sections 1-3 only)** (25 mins)
5. [Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback (Casper et al., 2023\)](https://arxiv.org/abs/2307.15217) **(sections 2-4 only)** (25 mins)
6. [Situational Awareness (Piper, 2023\)](https://www.planned-obsolescence.org/situational-awareness/) (5 mins)
7. [Playing the Training Game (Piper, 2023\)](https://www.planned-obsolescence.org/the-training-game/) (5 mins)

## Week 2: Goals and goal misgeneralization

This week discusses the notion of goal-directed behavior in AI systems. Such behaviors are common; for instance, agents trained via RL to solve mazes exhibit the goal-directed behavior of “move towards the maze exit.” The first reading discusses and gives examples of goal misgeneralization, where AI systems in training develop goals different from the ones their developers intended. Sophisticated AI systems with goals, regardless of what those goals are, could pursue certain instrumental subgoals like power-seeking. Moreover, under certain assumptions, sophisticated AI systems with unaligned goals may instrumentally behave well during training in order to prevent their goals from being modified; this failure mode is called deceptive alignment.

Core readings:

1. [Why alignment could be hard with modern deep learning (Cotra, 2021\)](https://www.cold-takes.com/why-ai-alignment-could-be-hard-with-modern-deep-learning/) (20 mins)
2. [Goal misgeneralization: why correct specifications aren’t enough for correct goals (Shah et al., 2022\)](https://arxiv.org/abs/2210.01790) **(only sections 1-4)** (25 mins)
3. [ML systems will have weird failure modes (Steinhardt, 2022\)](https://bounded-regret.ghost.io/ml-systems-will-have-weird-failure-modes-2/) (15 mins)

Further readings:

1. [Goal Misgeneralization in Deep Reinforcement Learning (Langosco et al., 2022\)](https://arxiv.org/pdf/2105.14111.pdf) **(only sections 3-3.3)** (15 mins)
2. [Optimal policies tend to seek power: NeurIPS spotlight presentation (Turner et al., 2022\)](https://nips.cc/virtual/2021/poster/28400) (15 mins)
3. [The alignment problem from a deep learning perspective (Ngo et al., 2022\)](https://arxiv.org/abs/2209.00626) **(only sections 3-4)** (20 mins)
4. [Language Models as Agent Models (Andreas, 2022\)](https://arxiv.org/abs/2212.01681) **(sections 1-6 only)** (30 mins)

## Week 3: Current trajectory and risk stories

Core readings:

1. [Epoch AI Trends Page (2024)](https://epochai.org/trends) (10 min)
2. [AIs Accelerating AI Research (Cotra, 2023\)](https://www.planned-obsolescence.org/ais-accelerating-ai-research/) and [Continuous Doesn’t Mean Slow (Davidson, 2023\)](https://www.planned-obsolescence.org/continuous-doesnt-mean-slow/) (20 min)
3. [What will GPT-2030 look like?](https://www.alignmentforum.org/posts/WZXqNYbJhtidjRXSi/what-will-gpt-2030-look-like) (10 min)
4. [How we could stumble into AI catastrophe](https://www.cold-takes.com/how-we-could-stumble-into-ai-catastrophe/) (20 min)

Further readings:

1. [Training Compute-Optimal Large Language Models](https://arxiv.org/pdf/2203.15556.pdf) (**only up to section 4**) (20 min)
2. [Biological Anchors: A Trick That Might Or Might Not Work (Alexander, 2022\)](https://astralcodexten.substack.com/p/biological-anchors-a-trick-that-might)
3. [Future ML Systems will be Qualitatively Different (Steinhardt, 2022\)](https://bounded-regret.ghost.io/future-ml-systems-will-be-qualitatively-different/)
4. [Training Compute-Optimal Large Language Models (Hoffman 2022\)](https://arxiv.org/abs/2203.15556)
5. [Neural scaling laws and GPT-3 (Kaplan, 2020\)](https://www.youtube.com/watch?v=QMqPAM_knrE) **(only up to 30:30)** (30 mins)
    1. Kaplan goes into more detail on foundation models, and outlines scaling laws which suggest that there will continue to be large returns to compute used during training.

## Week 4: Mechanistic interpretability

Core readings:

1. [Toy models of superposition (Elhage et al., 2022\)](https://transformer-circuits.pub/2022/toy_model/index.html) **(up to the end of section 3: superposition as a phase change)** (30 mins)
2. [Towards Monosemanticity: Decomposing Language Models With Dictionary Learning (Briken et al., 2023\)](https://transformer-circuits.pub/2023/monosemantic-features) **(only: Problem Setup, Arab Script Feature (only up to first image), Global Analysis, Phenomenology)** (30 mins)

Further readings:

1. [Zoom In: an introduction to circuits (Olah et al., 2020\)](https://distill.pub/2020/circuits/zoom-in/) (35 mins)
2. [Multimodal neurons in artificial neural networks (Goh et al., 2021\)](https://distill.pub/2021/multimodal-neurons/) (35 mins)
3. [An Interpretability Illusion for BERT (Bolukbasi et al., 2021\)](https://arxiv.org/pdf/2104.07143.pdf) (35 mins)
4. [Interpretability in the wild: a circuit for indirect object identification in GPT-2 small (Wang et al., 2022\)](https://arxiv.org/pdf/2211.00593.pdf) (30 mins)
5. [Superposition, Memorization, and Double Descent (Henighan et al., 2023\)](https://transformer-circuits.pub/2023/toy-double-descent/index.html) (30 mins)
6. [post](https://rome.baulab.info/) (10 mins)
7. [Discovering latent knowledge in language models without supervision (Burns et al., 2022\)](https://arxiv.org/abs/2212.03827) **(first 5 pages only)** (20 mins)
8. [Inference-Time Intervention: Eliciting Truthful Answers from a Language Model (Li et al., 2022\)](https://arxiv.org/abs/2306.03341) (only sections 1-3) (30 mins)
9. [Locating and Editing Factual Associations in GPT (Meng et al., 2022\)](https://rome.baulab.info/)
10. [Emergent World Representations: Exploring a Sequence Model Trained on a Synthetic Task (Li et al., 2023\)](https://arxiv.org/abs/2210.13382) (30 mins)
11. [Causal Scrubbing: a method for rigorously testing interpretability hypotheses (Chan et al., 2022\)](https://www.alignmentforum.org/posts/JvZhhzycHu2Yd57RN/causal-scrubbing-a-method-for-rigorously-testing)
12. [Adversarial Examples Are Not Bugs, They Are Features (Ilyas et al., 2019\)](https://arxiv.org/abs/1905.02175) (30 mins)
13. [Jailbroken: How Does LLM Safety Training Fail?](https://arxiv.org/pdf/2307.02483.pdf)
14. [Revisiting Model Stitching to Compare Neural Representations (Bansal et al., 2021\)](https://arxiv.org/abs/2106.07682) (30 mins)

## Week 5: Control

Core readings:

1. [The case for ensuring powerful AIs are controlled (Greenblatt et al., 2024\)](https://www.lesswrong.com/s/PC3yJgdKvk8kzqZyA/p/kcKrE9mzEHrdqtDpE) (30 min)
2. [AI Control: Improving safety despite intentional subversion (Greenblatt et al., 2024\)](https://arxiv.org/pdf/2312.06942.pdf) (30 min)

Further readings:

1. All readings on [AI Control](https://www.lesswrong.com/s/PC3yJgdKvk8kzqZyA)
2. [Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training](https://arxiv.org/abs/2401.05566) (30 min)
    - Sleeper Agents is an example of a “Model Organisms of Misalignment” paper. It intentionally trains a deceptive model in order to test alignment and control techniques.
    - [Simple probes can catch Sleeper Agents (MacDiarmid, 2024\)](https://www.anthropic.com/research/probes-catch-sleeper-agents) (15 mins) is one such example of a control technique.
3. [What AI companies can do today to help with the most important century (Karnofsky, 2023\)](https://www.cold-takes.com/what-ai-companies-can-do-today-to-help-with-the-most-important-century/)

## Week 6: Scalable oversight and Weak-to-strong generalization

Core readings:

1. [Why I’m excited about AI-assisted human feedback (Leike, 2022\)](https://aligned.substack.com/p/ai-assisted-human-feedback) (10 mins)
2. [AI Safety via debate (Amodei and Irving, 2018\)](https://openai.com/research/debate) (10 mins)
3. [Debating with More Persuasive LLMs Leads to More Truthful Answers (Khan et al., 2024\)](https://arxiv.org/pdf/2402.06782.pdf) (20 mins)
4. [Weak-to-strong generalization (Burns et al., 2023\)](https://cdn.openai.com/papers/weak-to-strong-generalization.pdf) **(up to section 5\)** (15 mins)
5. [Combining W2SG with SO (Leike, 2023\)](https://aligned.substack.com/p/combining-w2sg-with-scalable-oversight) (10 mins)

Further readings:

1. [Humans consulting HCH (Christiano, 2016\)](https://ai-alignment.com/humans-consulting-hch-f893f6051455) (15 mins)
    - HCH stands for “Humans consulting HCH,” and is a way to think about the ultimate goal of iterated distillation and amplification schemes.
2. Factored cognition (Ought, 2019\) **([introduction](https://ought.org/research/factored-cognition) and [scalability section](https://ought.org/research/factored-cognition/scalability))** (20 mins)
    - This reading gives a framing of IDA schemes in terms of factoring problems into subproblems which can be worked on without broader context.
    - [Chain of thought imitation with procedure cloning (Yang et al., 2022\)](https://arxiv.org/abs/2205.10816) (35 mins)
    - Yang et al. introduce Procedural Cloning, in which an agent is trained to mimic not just expert outputs, but also the process by which the expert reached those outputs.
3. [Measuring Progress on Scalable Oversight for Large Language Models (Bowman et al., 2022\)](https://arxiv.org/abs/2211.03540) **(sections 1-3 only)** (25 mins)
4. [Debate update: obfuscated arguments problem (Barnes and Christiano, 2020\)](https://www.alignmentforum.org/posts/PJLABqQ962hZEqhdB/debate-update-obfuscated-arguments-problem) (15 mins)
    - This reading explains why in the worst case, it’s not possible to judge a debate without adjudicating a prohibitively large number of subclaims.

## Week 7: Red teaming and Evaluations

1. [Universal and Transferable Adversarial Attacks on Aligned Language Models (Zou et al., 2023\)](https://arxiv.org/abs/2307.15043) **(sections 1-2 only)** (20 mins)
2. [Red Teaming Language Models with language Models (Perez et al., 2022\)](https://arxiv.org/pdf/2202.03286) **(only up to section 3\)** (10 mins)
3. [Evaluating Language Models on Realistic Autonomous Tasks (Kinniment et al., 2023\)](https://evals.alignment.org/Evaluating_LMAs_Realistic_Tasks.pdf) (25 mins)
4. Play around with [Gandalf AI](https://gandalf.lakera.ai/intro) (If time remains)

Further readings:

1. # [Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training](https://arxiv.org/abs/2401.05566) (30 min)

2. [METR’s Autonomy Evaluation Resources (2024)](https://metr.github.io/autonomy-evals-guide/)
3. [Constitutional AI: Harmlessness from AI Feedback (Bai et al., 2022\)](https://arxiv.org/abs/2212.08073) **(only sections 1, 3.1, and 4.1)** (20 mins)

## Week 8: Policy, Careers in Alignment

Core readings:

1. [The AI regulator’s toolbox: A list of concrete AI governance practices (Jones, 2024\)](https://adamjones.me/blog/ai-regulator-toolbox/) (20 minutes)
2. [Opportunities in alignment](https://docs.google.com/document/d/1oEJwiX6K8Vr-49K8ftB096MlGTIVTOGfAlAv2H5qifs/edit?usp=sharing) (Bashansky, 2024\) (35 mins)

[^1]: Adapted from Julia Galef’s Update Project
