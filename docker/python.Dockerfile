FROM python:3.9

ARG SERVICE
RUN apt-get update && apt-get install -y gcc git
RUN apt-get install -y curl netcat
RUN pip install pipenv

COPY ./requirements.txt /app/requirements.txt
COPY ./Pipfile /app/Pipfile

WORKDIR /app

# copy every content from the local file to the image
ADD $SERVICE/. $SERVICE/.
RUN pipenv install
# configure the container to run in an executed manner
CMD ["pipenv", "run", "python", "schedule/app.py"]