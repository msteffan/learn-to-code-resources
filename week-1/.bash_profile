# Set a greeting!
echo "Loading ~/.bash_profile a shell script that runs in every new terminal you open"

# $USER = YOU!
echo "Logged in as $USER"

# Colors ls: should use for folders, files, symlinks etc, see `man ls` and
# search for LSCOLORS
export LSCOLORS=CxGxFxdxCxDxDxaccxaeex
# Force ls to use colors (G) and use humanized file sizes (h)
alias ls='ls -Gh'

# Force grep to always use the color option and show line numbers
export GREP_OPTIONS='--color=always'
