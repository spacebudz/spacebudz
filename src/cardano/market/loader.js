class Loader {
  async load() {
    if (this._wasm) return;
    /**
     * @private
     */
    this._wasm = await import(
      "./custom_modules/@emurgo/cardano-multiplatform-lib-browser"
    );
  }

  get Cardano() {
    return this._wasm;
  }
}

export default new Loader();
