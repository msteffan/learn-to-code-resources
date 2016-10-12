# Open Sublime Text From Cygwin

If you're using Sublime Text as your text editor, you _may_ not be able to open it from Cygwin without a custom _bash_ script. Use the instructions below to create one, which will give you access to a new command that opens Sublime Text from the Cygwin command line.

## STEPS

### Step 1: Find the Path to sublime_text.exe
Your Sublime Text 2 or Sublime Text 3 application should have installed in the following location on your Windows OS:

Sublime Text 2  
```bash
/cygdrive/c/Program\ Files/Sublime\ Text\ 2/sublime_text.exe
```  

Sublime Text 3
```bash
/cygdrive/c/Program\ Files/Sublime\ Text\ 3/sublime_text.exe
```  

**NOTE** the backslashes, `\` are _escape characters_. You need them because bash scripts will not accept whitespace characters in paths.

### Step 2: Create a New File for Your Bash Script

Open Sublime Text, create a new file and select "Save" to save the file. You will be prompted to name your file. Name it **sublime**. No file extension is needed. For save location, use the file explorer to navigate to: `C/cygwin/usr/local/bin`.

### Step 3: Write Your Bash scripts

In your **sublime** file, we'll now add our Bash script. If you're using Sublime Text 2, copy the first code snippet. If you're using Sublime Text 3, copy the second script.  

For Sublime Text 2
```bash
#!/bin/sh
/cygdrive/c/Program\ Files/Sublime\ Text\ 2/sublime_text.exe $1 &
```

For Sublime Text 3
```bash
#!/bin/sh
/cygdrive/c/Program\ Files/Sublime\ Text\ 3/sublime_text.exe $1 &
```

Remember to save the file after you've added the code.

### Step 4: Turn `sublime` into an Executable File

We need to turn our **sublime** script into an executable file, so that it will run from the Cygwin command line.

Launch your Cygwin application, and enter the following command:

```bash
chmod +x usr/local/bin/sublime
```
Press enter to make the file executable.

### Step 5: Test it out!

Test out `sublime` command. From Cygwin, create a new file:

```bash
touch test.txt  
```

Hit enter to create the file. Next, open it with your new command:

```bash
sublime test.txt
```

That should launch Sublime Text!

### Step 6: Troubleshooting

If following these instructions results in an error, it may be that your Sublime Text application installed in a location other than `/cygdrive/c/Program\ Files/Sublime\ Text\ 2/sublime_text.exe`. If you suspect that's the case, you may need to do a little investigation work to find the exact filepath that leads to Sublime. Once you find it, substitute that filepath for `/cygdrive/c/Program\ Files/Sublime\ Text\ 2/sublime_text.exe` and you should be good to go!

If you're still hitting snags, tag `@dan-a` in Slack! 
