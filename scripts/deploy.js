
const deploy = async () => {
    const [deployer] = await ethers.getSigners();
    console.log("deploying...", deployer.address);
    const PunksContract = await ethers.getContractFactory("Punks");
    const deployed = await PunksContract.deploy();
    console.log(`just deployed in ${deployed.address}`);
};

deploy()
    .then(() => {
        return process.exit(0);
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
