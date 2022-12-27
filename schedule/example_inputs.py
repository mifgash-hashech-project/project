import random

NUM_WORKERS = 25
AM_PERIODS = 21
AM_QUARTERS = 14
quarters = [8, 5, 8, 10, 10, 5, 12, 12, 12, 14, 10, 12, 12, 5, 14, 6, 5,
            5, 5, 5, 5, 5, 10, 6, 8, 10, 10, 12]

periods = ["{} {}-{}".format(day, hour * 8, (hour + 1) * 8) for day in
           ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] for
           hour in range(3)
           ]

worker_data = {}

for worker in range(NUM_WORKERS):
    worker_data["worker{}".format(str(worker))] = {
        "period_avail": [random.randint(0, 1) for period in
                         range(AM_PERIODS)],
        "skill_level": random.randint(0, 100),
    }
