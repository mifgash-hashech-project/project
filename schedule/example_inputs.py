import random

NUM_WORKERS = 25
AM_PERIODS = 42

quarters = [8, 5, 8, 10, 10, 5, 12, 12, 12, 14, 10, 12, 12, 5, 14, 6, 5,
            5, 5, 5, 5, 5, 10, 6, 8, 10, 10, 12]

periods = [
    "{} {}-{}".format(
        day, hour * 4, (hour + 1) * 4
    ) for day in ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] for
    hour in range(6)
]

worker_data = {}

for worker in range(NUM_WORKERS):
    worker_data["worker{}".format(str(worker))] = {
        "period_avail": [random.randint(0, 1) for period in
                         range(AM_PERIODS)],
        "skill_level": random.randint(0, 100),
    }

rty = {
    "worker1": {
        "schedule": [["Tue", "16-20"], ["Wed", "16-20"], ["Thu", "0-4"],
                     ["Thu", "12-16"], ["Fri", "16-20"], ["Sat", "4-8"],
                     ["Sat", "12-16"], ["Sat", "16-20"],
                     ["Sun", "8-12"]],
        "skill_level": 16},
    "worker10": {"schedule": [["Mon", "20-24"], ["Tue", "16-20"]],
                 "skill_level": 63}, "worker11": {
        "schedule": [["Mon", "16-20"], ["Tue", "0-4"], ["Tue", "4-8"],
                     ["Tue", "16-20"], ["Wed", "16-20"], ["Thu", "4-8"],
                     ["Thu", "12-16"], ["Sun", "4-8"]],
        "skill_level": 16}, "worker12": {
        "schedule": [["Wed", "4-8"], ["Thu", "0-4"], ["Thu", "4-8"],
                     ["Thu", "12-16"], ["Sun", "16-20"]],
        "skill_level": 50}, "worker13": {
        "schedule": [["Mon", "16-20"], ["Tue", "0-4"], ["Tue", "16-20"],
                     ["Wed", "16-20"], ["Thu", "4-8"], ["Thu", "12-16"],
                     ["Thu", "16-20"], ["Sun", "16-20"],
                     ["Sun", "20-24"]], "skill_level": 11},
    "worker14": {"schedule": [["Mon", "4-8"], ["Mon", "20-24"],
                              ["Tue", "0-4"], ["Tue", "4-8"],
                              ["Thu", "12-16"], ["Fri", "4-8"],
                              ["Sat", "12-16"], ["Sun", "4-8"],
                              ["Sun", "8-12"]], "skill_level": 24},
    "worker15": {"schedule": [["Mon", "16-20"], ["Sun", "12-16"],
                              ["Sun", "16-20"]], "skill_level": 63},
    "worker16": {"schedule": [["Mon", "0-4"], ["Mon", "4-8"],
                              ["Mon", "16-20"], ["Tue", "16-20"],
                              ["Wed", "4-8"], ["Wed", "16-20"],
                              ["Thu", "12-16"], ["Thu", "16-20"],
                              ["Fri", "4-8"], ["Fri", "16-20"]],
                 "skill_level": 16}, "worker17": {
        "schedule": [["Wed", "16-20"], ["Sat", "0-4"], ["Sun", "4-8"]],
        "skill_level": 66},
    "worker18": {"schedule": [], "skill_level": 80}, "worker19": {
        "schedule": [["Mon", "0-4"], ["Mon", "16-20"], ["Tue", "0-4"],
                     ["Wed", "16-20"], ["Wed", "20-24"], ["Thu", "0-4"],
                     ["Sat", "12-16"], ["Sat", "16-20"],
                     ["Sun", "16-20"]], "skill_level": 24}, "worker2": {
        "schedule": [["Tue", "16-20"], ["Wed", "0-4"], ["Wed", "4-8"],
                     ["Fri", "4-8"], ["Sun", "4-8"]],
        "skill_level": 50},
    "worker20": {"schedule": [["Fri", "8-12"], ["Sat", "4-8"]],
                 "skill_level": 86}, "worker21": {
        "schedule": [["Mon", "4-8"], ["Mon", "16-20"], ["Tue", "16-20"],
                     ["Wed", "4-8"], ["Wed", "8-12"], ["Wed", "16-20"],
                     ["Sat", "16-20"], ["Sun", "4-8"]],
        "skill_level": 16}, "worker22": {
        "schedule": [["Tue", "20-24"], ["Wed", "4-8"], ["Wed", "16-20"],
                     ["Thu", "16-20"], ["Sun", "4-8"],
                     ["Sun", "16-20"]], "skill_level": 50},
    "worker23": {"schedule": [["Mon", "8-12"], ["Mon", "12-16"],
                              ["Tue", "12-16"], ["Wed", "4-8"],
                              ["Thu", "4-8"], ["Sat", "8-12"],
                              ["Sun", "0-4"]], "skill_level": 100},
    "worker24": {"schedule": [["Mon", "4-8"], ["Tue", "0-4"],
                              ["Tue", "16-20"], ["Wed", "4-8"],
                              ["Wed", "8-12"], ["Thu", "4-8"],
                              ["Thu", "12-16"], ["Sat", "16-20"],
                              ["Sun", "16-20"]], "skill_level": 24},
    "worker25": {"schedule": [["Mon", "0-4"], ["Thu", "16-20"],
                              ["Fri", "16-20"], ["Sat", "4-8"],
                              ["Sun", "16-20"]], "skill_level": 63},
    "worker3": {"schedule": [["Wed", "4-8"], ["Fri", "4-8"],
                             ["Fri", "12-16"], ["Fri", "16-20"]],
                "skill_level": 80}, "worker4": {
        "schedule": [["Mon", "16-20"], ["Tue", "16-20"], ["Wed", "4-8"],
                     ["Wed", "20-24"], ["Thu", "0-4"], ["Thu", "16-20"],
                     ["Sun", "16-20"], ["Sun", "20-24"]],
        "skill_level": 24}, "worker5": {
        "schedule": [["Tue", "16-20"], ["Thu", "0-4"], ["Thu", "12-16"],
                     ["Sun", "4-8"]], "skill_level": 63}, "worker6": {
        "schedule": [["Wed", "4-8"], ["Thu", "0-4"], ["Thu", "12-16"],
                     ["Fri", "20-24"], ["Sat", "20-24"],
                     ["Sun", "4-8"]], "skill_level": 55}, "worker7": {
        "schedule": [["Mon", "4-8"], ["Mon", "20-24"], ["Tue", "4-8"],
                     ["Tue", "16-20"], ["Wed", "16-20"],
                     ["Wed", "20-24"], ["Thu", "0-4"], ["Sat", "4-8"],
                     ["Sat", "12-16"], ["Sat", "16-20"],
                     ["Sun", "16-20"], ["Sun", "20-24"]],
        "skill_level": 21},
    "worker8": {
        "schedule": [["Wed", "12-16"], ["Thu", "8-12"], ["Fri", "0-4"],
                     ["Sat", "16-20"]], "skill_level": 80},
    "worker9": {
        "schedule": [["Tue", "0-4"], ["Tue", "4-8"], ["Tue", "8-12"],
                     ["Wed", "4-8"], ["Wed", "8-12"], ["Thu", "20-24"]],
        "skill_level": 65}
}
