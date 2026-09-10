# Contributing Guide 📚

Welcome to our classroom repository! This guide will help you contribute effectively using pull requests.

## **Getting Started**

### **1. Fork or Clone the Repository**
```bash
git clone https://github.com/CZMGC-SY202528/git-oss-course_2026.git
cd git-oss-course_2026
```

### **2. Create a Feature Branch**
```bash
git checkout -b feature/your-feature-name
```

**Branch Naming Convention:**
- `feature/feature-name` - For new features
- `fix/bug-description` - For bug fixes
- `docs/documentation-update` - For documentation
- `student/your-name` - For practice/learning

### **3. Make Your Changes**
- Write clear, meaningful commits
- One logical change per commit
- Use descriptive commit messages

```bash
git add .
git commit -m "Add: Brief description of what you added"
```

### **4. Push Your Branch**
```bash
git push origin feature/your-feature-name
```

### **5. Create a Pull Request**
- Go to the repository on GitHub
- Click "New Pull Request"
- Select your branch and fill out the PR template
- Be descriptive and clear!

---

## **Pull Request Guidelines**

✅ **DO:**
- Write clear PR titles (e.g., "Add student bio to README")
- Fill out the entire PR template
- Keep PRs focused on one feature/fix
- Respond to review comments promptly
- Test your changes before submitting

❌ **DON'T:**
- Submit incomplete or untested code
- Make multiple unrelated changes in one PR
- Ignore reviewer feedback
- Commit directly to `main` branch

---

## **Code Style**

- Use consistent indentation (2 or 4 spaces)
- Add comments for complex code
- Keep functions/methods small and focused
- Follow the existing project structure

---

## **Common Git Commands Cheat Sheet**

```bash
# Check your branch
git branch

# See your changes
git status

# View commit history
git log --oneline

# Undo last commit (before pushing)
git reset --soft HEAD~1

# Update your branch from main
git fetch origin
git rebase origin/main

# Resolve conflicts
# Edit files, then:
git add .
git rebase --continue
```

---

## **Getting Help**

- 💬 Ask questions in PR comments
- 📖 Check the README for project info
- 👥 Reach out to your classmates or instructor
- 🔍 Review other PRs to learn from examples

---

## **Learning Objectives**

By contributing, you'll learn:
- How to use Git and GitHub
- Collaborative development workflow
- Code review best practices
- Writing clear documentation
- Professional communication

Happy coding! 🚀
