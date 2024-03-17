 import ASMScreenobjs from "../Screen-Objects/ASMScreen.ts";
class ASM{

        public async ASMSkipOperation() {
            await (await ASMScreenobjs.SkipButton).click();
        }
        

}
export default new ASM();