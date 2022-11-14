FROM python:3.9-slim

ARG SERVICE

RUN apt-get update && apt-get install -y gcc git
RUN apt-get install -y curl netcat
RUN pip install pipenv

COPY $SERVICE/. ./

RUN pip install openpyxl flask pandas pulp flask_cors

CMD python app.py