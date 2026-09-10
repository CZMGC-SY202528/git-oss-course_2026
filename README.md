# 📚 Git & Open Source Contribution — Class Repository

Welcome to the **Git & Open Source Contribution Course**! This is your learning space to practice Git, GitHub, and professional collaboration skills.

---

## 🎯 Course Overview

This repository is designed for **class-wise team-based learning**. Each class has been organized into teams, and you'll practice:

- ✅ Creating branches and commits
- ✅ Opening Pull Requests (PRs)
- ✅ Reviewing code and providing feedback
- ✅ Resolving merge conflicts
- ✅ Collaborating with your team

---

## 🚀 Quick Start Guide

### **Step 1: Set Up Your Local Environment**

```bash
# Clone the repository
git clone https://github.com/CZMGC-SY202528/git-oss-course_2026.git
cd git-oss-course_2026

# Check your current branch
git branch

# See remote URLs
git remote -v
```

### **Step 2: Create Your Feature Branch**

Use your **class team name** and **your name** in the branch name:

```bash
# Branch naming format: feature/class-section/your-name
git checkout -b feature/class-a/john-doe
# or
git checkout -b feature/section-b/jane-smith
```

### **Step 3: Make Your Changes**

Edit files, add content, or complete assignments:

```bash
git add .
git commit -m "Add: Brief description of your change"
git push origin feature/class-a/john-doe
```

### **Step 4: Open a Pull Request (PR)**

1. Go to [github.com/CZMGC-SY202528/git-oss-course_2026](https://github.com/CZMGC-SY202528/git-oss-course_2026)
2. Click **"Pull Requests"** tab
3. Click **"New Pull Request"**
4. Select your branch
5. **Fill out the PR template completely** ← This is important!
6. Click **"Create Pull Request"**

### **Step 5: Respond to Feedback**

- 💬 Read your instructor's comments
- 📝 Make requested changes in your branch
- 🔄 Push updates (PR updates automatically)
- ✅ Request review when ready

---

## 📋 Your Class Teams

Teams have been organized by **section/class**. 

**Each team has:**
- 🔐 Access to this repository
- 📊 Project board for tracking assignments
- 💬 Discussion space for collaboration
- 🎓 Learning resources

> Check your **Teams** tab in the GitHub organization to see which team you belong to.

---

## 📝 Assignment Workflow

### **For Each Assignment:**

1. **Create a branch** from `main`
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/assignment-[number]
   ```

2. **Complete the work** on your branch

3. **Commit with clear messages**
   ```bash
   git commit -m "Complete: Assignment 1 - Add student profile"
   ```

4. **Push to GitHub**
   ```bash
   git push origin feature/assignment-[number]
   ```

5. **Open a Pull Request** with details:
   - What you did
   - How to test it
   - Any challenges you faced

6. **Get feedback** from your instructor or classmates

7. **Make changes** if requested

8. **Merge** once approved ✅

---

## 🌳 Git Commands Quick Reference

```bash
# Clone the repo
git clone <url>

# Create and switch to a branch
git checkout -b feature/my-feature

# Switch between branches
git checkout main
git checkout feature/my-feature

# Check your current branch
git branch

# See what changed
git status

# Stage changes
git add .
git add file.txt

# Commit with a message
git commit -m "Add: Description of change"

# Push to GitHub
git push origin feature/my-feature

# Pull latest changes from main
git pull origin main

# View commit history
git log --oneline

# Undo last commit (before pushing)
git reset --soft HEAD~1

# Update your branch with latest main (before PR)
git fetch origin
git rebase origin/main
```

---

## ✅ Before Opening a PR — Checklist

- [ ] I've read the `CONTRIBUTING.md` file
- [ ] My branch name follows the naming convention
- [ ] I've tested my changes locally
- [ ] I've committed with clear, descriptive messages
- [ ] I've pushed my changes to GitHub
- [ ] The PR template is completely filled out
- [ ] I've linked any related issues (if applicable)
- [ ] My code follows the project's style guide
- [ ] I'm not committing directly to `main` ✋

---

## 🔍 Code Review Guidelines

### **When Reviewing Others' PRs:**

✅ **DO:**
- 💡 Suggest improvements (be constructive)
- 🎯 Ask clarifying questions
- 👍 Acknowledge good work
- 📚 Share resources/links
- 🤝 Be respectful and supportive

❌ **DON'T:**
- 😠 Make negative comments
- 🚫 Demand changes without explanation
- 🤐 Ignore feedback on your own PRs
- 💔 Discourage team members

---

## 📚 Learning Resources

| Resource | Purpose |
|----------|---------|
| [CONTRIBUTING.md](./CONTRIBUTING.md) | How to contribute to this repo |
| [GitHub Docs - PRs](https://docs.github.com/en/pull-requests) | Official PR documentation |
| [GitHub Docs - Branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository) | Branch management |
| [Pro Git Book](https://git-scm.com/book/en/v2) | Free Git learning resource |

---

## 🎓 Learning Objectives

By the end of this course, you will:

1. ✅ Understand Git fundamentals (commits, branches, merges)
2. ✅ Create and manage branches effectively
3. ✅ Write clear commit messages
4. ✅ Open and review Pull Requests
5. ✅ Collaborate with team members
6. ✅ Resolve merge conflicts
7. ✅ Follow professional development workflows
8. ✅ Contribute to open-source projects confidently

---

## ❓ Frequently Asked Questions

### **Q: I made a mistake. Can I undo my commit?**
**A:** Yes! Before pushing, use:
```bash
git reset --soft HEAD~1
```

### **Q: How do I update my branch with the latest changes from main?**
**A:** Use rebase or pull:
```bash
git fetch origin
git rebase origin/main
# or
git pull origin main
```

### **Q: What if there's a merge conflict?**
**A:** 
1. Run `git status` to see conflicting files
2. Edit the files and resolve conflicts manually
3. Run `git add .` and `git commit -m "Resolve: merge conflicts"`
4. Push your changes

### **Q: Can I delete my branch after the PR is merged?**
**A:** Yes! GitHub will offer to delete it. You can also do it locally:
```bash
git branch -d feature/my-feature
```

### **Q: I pushed to the wrong branch. How do I fix it?**
**A:** Ask your instructor for help — they can revert commits if needed.

---

## 📞 Getting Help

- 💬 **Ask in your team's discussion** — your classmates might have the answer
- 📧 **Leave a comment in your PR** — tag your instructor
- 🔗 **Check existing issues** — your question might already be answered
- 👥 **Attend office hours** — direct help from the instructor

---

## 🎉 Success Tips

1. **Commit often** — Small, logical commits are easier to review
2. **Write clear messages** — Future you will thank present you
3. **Read feedback carefully** — Reviewers are helping you learn
4. **Don't be afraid to ask questions** — That's what learning is about
5. **Help your classmates** — Reviewing others' code is great practice
6. **Practice locally first** — Test your changes before pushing to GitHub

---

## 📍 Repository Links

- **Main Repo:** [github.com/CZMGC-SY202528/git-oss-course_2026](https://github.com/CZMGC-SY202528/git-oss-course_2026)
- **Organization:** [github.com/orgs/CZMGC-SY202528](https://github.com/orgs/CZMGC-SY202528)
- **Pull Requests:** [View all PRs](https://github.com/CZMGC-SY202528/git-oss-course_2026/pulls)
- **Issues:** [View all Issues](https://github.com/CZMGC-SY202528/git-oss-course_2026/issues)

---

## 📜 License

This repository is for educational purposes. See individual files for license information.

---

**Happy coding! 🚀 Let's learn Git and GitHub together!**

---

*Last Updated: 2026-09-10*
*Course Instructor: [Your Name]*

## Student Contributor

- **Name:** Alfiza Malek
- **Contribution:** Practiced Git branching, commits, and GitHub pull request workflow.
