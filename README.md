![precicount!](/docs/img/precicount.png?raw=true "precicount")

# PreciCount
DL-enabled Automatic Cells Counting Tool

### Installation

The supported OS is Ubuntu 18.04 LTS (however, it should work fine on other distributions).
Supported Python version is 3.6+.
Supported CUDA version is 10.1.
Supported tensorflow version is 2.1.

---

Install CUDA 10.1 from [NVIDIA website](https://developer.nvidia.com/cuda-10.1-download-archive). Make sure that your local gcc, g++, cmake versions are not older than the ones used to compile your OS kernel.

You will need to download the latest [cuDNN](https://developer.nvidia.com/rdp/cudnn-archive) for CUDA 10.1. 
Unzip it:
```
tar -xzvf cudnn-10.1-linux-x64-v7.6.4.38.tgz
```
Run
```
sudo cp cuda/include/cudnn.h /usr/local/cuda/include
sudo cp cuda/lib64/libcudnn* /usr/local/cuda/lib64
sudo chmod a+r /usr/local/cuda/include/cudnn.h /usr/local/cuda/lib64/libcudnn*
```
---

Install [Node.js](https://nodejs.org/en/download/) for SPA capabilities.

---

To run the project, you need to use Python 3.6+. 
Use virtual environment to setup the project:
```
virtualenv -p python3.6 venv
source venv/bin/activate
```

The required dependencies are listed below: 
```{python}
jupyter
tensorflow-gpu
numpy
pandas
sklearn
matplotlib
opencv-python
scipy
tqdm
seaborn
pillow==6.2.1
```

To install the dependencies run
```
pip install -r requirements.txt 
```

### Training and Testing models

Run
```
cd models
jupyter notebook
```

When jupyter server becomes active, select the notebook you would like to try and run it.


### Testing the Application

Run
```
cd backend
npm install
npm start
```

Run 
```
cd precicount
npm install
npm start
```
