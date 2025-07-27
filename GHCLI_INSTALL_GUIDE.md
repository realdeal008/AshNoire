# GitHub CLI Installation Guide for Windows

To install the GitHub CLI (`gh`) on Windows, follow these steps:

## Method 1: Using the official installer

1. Visit the official GitHub CLI releases page:  
   https://github.com/cli/cli/releases/latest

2. Download the Windows installer file:  
   Look for a file named similar to `gh_2.x.x_windows_amd64.msi`

3. Run the downloaded `.msi` installer and follow the installation prompts.

4. After installation, open a new Command Prompt or PowerShell window and verify installation by running:  
   ```
   gh --version
   ```

## Method 2: Using Scoop (if you have Scoop installed)

1. Open PowerShell and run:  
   ```
   scoop install gh
   ```

2. Verify installation:  
   ```
   gh --version
   ```

## Method 3: Using Chocolatey (if you have Chocolatey installed)

1. Open an elevated Command Prompt or PowerShell and run:  
   ```
   choco install gh
   ```

2. Verify installation:  
   ```
   gh --version
   ```

---

Once installed, you can use the `gh` command to create pull requests and manage GitHub repositories from the command line.

If you want, I can assist you with the installation steps or help you create the pull request manually after installation.
