import sys
import numpy as np
import pandas as pd

# upgrade pip using 'pip3 install --upgrade pip'
# use 'pip install numpy' or 'pip3 install numpy'
# use 'pip install pandas' or 'pip3 install pandas'

tool = sys.argv[1]
data = pd.DataFrame(sys.argv[2])
data

print(data)
