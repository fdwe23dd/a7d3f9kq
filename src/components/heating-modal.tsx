"use client"

import { useState } from "react"
import Button from "./ui/button"
import { SelectField } from "./ui/select"
import { CircleX, Plus } from "lucide-react"

export type TabType = "flachheizkörper" | "fußbodenheizung" | "andere"
export type SubTabType = "Stahl-/Gussradiator" | "Rohr-/Säulenradiator" | "Badheizkörper" | "Profi Eingabe"

export default function HeatingModal({ onClose }: { onClose: () => void }) {
    const [activeTab, setActiveTab] = useState<TabType>("flachheizkörper")
    const [activeSubTab, setActiveSubTab] = useState<SubTabType>("Stahl-/Gussradiator")

    const heatingCircuits = [
        { value: "circuit1", label: "Wohnzimmer" },
        { value: "circuit2", label: "Bad" },
        { value: "circuit3", label: "Arbeitzimmer" }
    ]

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="w-full max-w-3xl rounded-xl bg-white">

                {/* Header */}
                <div className="flex items-center justify-between p-4">
                    <h2 className="heading-xl ml-1">Heizflächen hinzufügen</h2>
                    <CircleX onClick={onClose} className="text-black cursor-pointer" />
                </div>

                {/* Content */}
                <div className="p-4">

                    {/* Heating Circuit */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="heatingCircuit" className="heading-md ml-1">Heizkreis</label>
                            <Button variant="link">Heizkreis hinzufügen</Button>
                        </div>

                        <SelectField
                            id="heatingCircuit"
                            options={heatingCircuits}
                        />

                        <div className="flex mt-2 ml-1 space-x-1 items-center">
                            <p className="label">Heizkörper:</p>
                            <p className="label flex items-center justify-center text-white bg-brand-default rounded-full w-5 h-5">
                                2
                            </p>
                        </div>
                    </div>

                    {/* New heater */}
                    <div className="p-4 h-[330px] overflow-y-auto">

                        {/* Tabs */}
                        <div className="mb-4 border-b text-black">
                            <div className="flex">
                                {["flachheizkörper", "fußbodenheizung", "andere"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab as TabType)}
                                        className={`tab-button ${activeTab === tab ? "tab-active" : "tab-inactive"}`}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}

                        {/* Flachheizkörper */}
                        {activeTab === "flachheizkörper" && (
                            <div className="rounded-xl border p-4">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    {[
                                        { id: "art", label: "Heizkörper Art", options: [{ value: "type1", label: "Typ 1" }, { value: "type2", label: "Typ 2" }, { value: "type3", label: "Typ 3" }] },
                                        { id: "typ", label: "Heizkörper Typ", options: [{ value: "type1", label: "Typ 1" }, { value: "type2", label: "Typ 2" }, { value: "type3", label: "Typ 3" }] }
                                    ].map(({ id, label, options }) => (
                                        <div key={id}>
                                            <label htmlFor={id} className="label">{label}</label>
                                            <SelectField id={id} options={options} />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="height" className="label">Höhe (mm)</label>
                                        <input id="height" type="text" placeholder="z.B. 200" className="input" />
                                    </div>
                                    <div>
                                        <label htmlFor="length" className="label">Länge (mm)</label>
                                        <input id="length" type="text" placeholder="z.B. 400" className="input" />
                                    </div>
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <Button className="flex">
                                        <Plus className="pr-2" /> Hinzufügen
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Fußbodenheizung */}
                        {activeTab === "fußbodenheizung" && (
                            <div className="rounded-xl border p-4">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    {[
                                        {
                                            id: "art",
                                            label: "Heizkörper Art",
                                            options: [{value: "type1", label: "Typ 1"}, {
                                                value: "type2",
                                                label: "Typ 2"
                                            }, {value: "type3", label: "Typ 3"}]
                                        },
                                        {
                                            id: "typ",
                                            label: "Heizkörper Typ",
                                            options: [{value: "type1", label: "Typ 1"}, {
                                                value: "type2",
                                                label: "Typ 2"
                                            }, {value: "type3", label: "Typ 3"}]
                                        }
                                    ].map(({id, label, options}) => (
                                        <div key={id}>
                                            <label htmlFor={id} className="label">{label}</label>
                                            <SelectField id={id} options={options}/>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="height" className="label">Raumgröße (qm)</label>
                                        <input id="height" type="text" placeholder="z.B. 43qm" className="input"/>
                                    </div>

                                </div>

                                <div className="mt-4 flex justify-end">
                                    <Button className="flex">
                                        <Plus className="pr-2"/> Hinzufügen
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Others */}
                        {activeTab === "andere" && (
                            <div className="rounded-xl border p-4">
                                <div className="mb-4 border-b text-black">
                                    <div className="flex flex-wrap">
                                        {([
                                            "Stahl-/Gussradiator",
                                            "Rohr-/Säulenradiator",
                                            "Badheizkörper",
                                            "Profi Eingabe"
                                        ] as SubTabType[]).map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveSubTab(tab)}
                                                className={`tab-button ${activeSubTab === tab ? "tab-active" : "tab-inactive"}`}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="height-other" className="label">Höhe (mm)</label>
                                        <input id="height-other" type="text" placeholder="z.B. 200" className="input"/>
                                    </div>
                                    <div>
                                        <label htmlFor="length-other" className="label">Länge (mm)</label>
                                        <input id="length-other" type="text" placeholder="z.B. 400" className="input"/>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <Button className="flex">
                                        <Plus className="pr-2"/> Hinzufügen
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end p-4">
                    <Button onClick={onClose} variant="secondary">
                        Abbrechen
                    </Button>
                </div>
            </div>
        </div>
    )
}