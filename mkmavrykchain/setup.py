import setuptools

import versioneer

with open("README.md", "r") as readme:
    long_description = readme.read()

setuptools.setup(
    name="mkmavrykchain",
    version=versioneer.get_version(),
    cmdclass=versioneer.get_cmdclass(),
    packages=["mavrykchain"],
    author="MavrykDynamics",
    description="A utility to generate k8s configs for a Mavryk blockchain",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/mavryk-network/mavryk-k8s",
    include_package_data=True,
    install_requires=["pyyaml"],
    setup_requires=["wheel"],
    extras_require={"dev": ["pytest", "autoflake", "isort", "black"]},
    entry_points={"console_scripts": ["mkmavrykchain=mavrykchain.mkmavrykchain:main"]},
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.7",
)
