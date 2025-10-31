#!/bin/bash
# EmailJS setup script for Linda Hillman Chayes website

# Colors for terminal output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to check command status
check_status() {
  if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error: $1 failed${NC}"
    exit 1
  else
    echo -e "${GREEN}✅ $2${NC}"
  fi
}

# Banner
echo -e "${BLUE}==============================================${NC}"
echo -e "${BLUE}      EmailJS Setup for LEH Website         ${NC}"
echo -e "${BLUE}==============================================${NC}"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed. Please install Node.js and npm first.${NC}"
    exit 1
fi

# Install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
npm install
check_status "npm install" "Dependencies installed"

# Prompt for EmailJS credentials
echo -e "${YELLOW}Please enter your EmailJS credentials:${NC}"

read -p "EmailJS Service ID (e.g., service_abc123): " SERVICE_ID
read -p "EmailJS Template ID (e.g., template_xyz789): " TEMPLATE_ID
read -p "EmailJS Public Key (e.g., user_abcdef123456): " PUBLIC_KEY
read -p "Recipient Email for form submissions: " TO_EMAIL

# Replace placeholders in ContactForm.js
echo -e "${YELLOW}Updating ContactForm.js with your credentials...${NC}"

# Create a backup of the original file
cp src/components/ContactForm.js src/components/ContactForm.js.bak
check_status "backup creation" "Backup created as ContactForm.js.bak"

# Replace placeholders with actual values
sed -i '' "s/YOUR_SERVICE_ID/$SERVICE_ID/g" src/components/ContactForm.js
sed -i '' "s/YOUR_TEMPLATE_ID/$TEMPLATE_ID/g" src/components/ContactForm.js
sed -i '' "s/YOUR_PUBLIC_KEY/$PUBLIC_KEY/g" src/components/ContactForm.js
sed -i '' "s/linda@lindahillmanchayes.com/$TO_EMAIL/g" src/components/ContactForm.js

check_status "credential replacement" "Credentials updated in ContactForm.js"

# Run development server for testing
echo -e "${GREEN}Setup complete!${NC}"
echo -e "${YELLOW}Would you like to start the development server to test the form? (y/n)${NC}"
read -p "" START_SERVER

if [[ $START_SERVER =~ ^[Yy]$ ]]; then
  echo -e "${BLUE}Starting development server...${NC}"
  echo -e "${BLUE}Open http://localhost:3000/contact to test the form${NC}"
  npm run dev
else
  echo -e "${GREEN}You can start the server later with 'npm run dev'${NC}"
  echo -e "${GREEN}Then navigate to http://localhost:3000/contact to test the form${NC}"
fi

echo -e "${BLUE}==============================================${NC}"
echo -e "${GREEN}EmailJS setup complete! Don't forget to:${NC}"
echo -e "${GREEN}1. Test the form thoroughly${NC}"
echo -e "${GREEN}2. Commit your changes to Git${NC}"
echo -e "${GREEN}3. Deploy to Vercel${NC}"
echo -e "${BLUE}==============================================${NC}"
