#!/bin/sh

# Detect the operating system
case "$(uname -s)" in
    Linux*)
        # Linux
        curl -fsSL https://get.docker.com -o get-docker.sh
        sudo sh get-docker.sh
        sudo usermod -aG docker $(whoami)
        sudo apt-get install docker-compose -y
        ;;
    Darwin*)
        # macOS
        brew install docker
        brew install docker-compose
        ;;
    CYGWIN*|MINGW32*|MSYS*)
        # Windows
        Install-Module -Name DockerMsftProvider -Repository PSGallery -Force
        Install-Package -Name docker -ProviderName DockerMsftProvider
        Install-Module -Name DockerCompletion -Repository PSGallery -Force
        Install-Module -Name DockerCompose -Repository PSGallery -Force
        ;;
    *)
        echo "Operating system not supported"
        exit 1
        ;;
esac

# Verify that Docker and Docker Compose are installed
if ! command -v docker &> /dev/null; then
    echo "Docker installation failed"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "Docker Compose installation failed"
    exit 1
fi

echo "Docker and Docker Compose installed successfully"
